import Vue from 'vue';
import BScroll from 'better-scroll';
import echarts from 'echarts';
/*
* echarts 配置指令
* echarts-render="{options: options}"
*/
Vue.directive('echartsRender', {
    inserted (el, binding) {
        const chart = echarts.init(el);
        el.chartoption = JSON.stringify(binding.value.options);
        chart.setOption(binding.value.options);
        window.addEventListener('resize', chart.resize);
    },
    update (el, binding) {
        if (JSON.stringify(binding.value.options) == el.chartoption) return;
        const oldChart = echarts.getInstanceByDom(el);
        if (oldChart) {
            window.removeEventListener('resize', oldChart.resize);
            oldChart.dispose();
        }
        const chart = echarts.init(el);
        chart.setOption(binding.value.options);
        el.chartoption = JSON.stringify(binding.value.options);
        window.addEventListener('resize', chart.resize);
    },
    unbind (el) {
        const oldChart = echarts.getInstanceByDom(el);
        if (oldChart) {
            window.removeEventListener('resize', oldChart.resize);
            oldChart.dispose();
        }
    }
});

/*
* better-scroll 配置指令
*/
Vue.directive('betterScroll', {
    inserted (el, binding) {
        const options = {
            scrollbar: {
                fade: false,
                interactive: true
            },
            mouseWheel: true, // 以上为默认配置
            ...(binding.value && binding.value.options)
        },
            events = (binding.value && binding.value.events) || {};
        const scroller = new BScroll(el, options);

        for (let key in events) { // 绑定事件
            if (events.hasOwnProperty(key)) {
                scroller.on(key, events[key]);
            }
        }
        if (binding.value && binding.value.init) { // 把BScroll对象回传以便进行额外操作
            binding.value.init(scroller);
        }
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
    }
});