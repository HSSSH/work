import RandomCode from '@/tools/RandomCode';
import { login , checkOnly ,register} from '@/api/login';

export default {
    components:{
        RandomCode
    },
    data () {
        return {
            pageIndex:1,
            state: {
                indexType: 1,
                carouselIndex: 0
            },
            check: {
                inputCode:'',
                generateCode:'',
                codeError:false,
                schoolError:false,
                nameError:false,
                phoneError:false,
                passwordError:false,
                checkPassWrong:false,
                userAlready:false,
            },
            reg:{
                region:'',
                name:'',
                username:'',
                password:'',
            },
            error: false,
            loading: false,
        }
    },
    created() {
        this.state.indexType = this.$route.query.reg == 'register' ? 2:1;
        let vm = this;
        document.onkeypress = function(e) {
            let code;
            if (!e) {
                let e = window.event;
            }
            if (e.keyCode) {
                code = e.keyCode;
            } else if (e.which) {
                code = e.which;
            }
            if (code == 13) {
                if(vm.state.indexType == 2 && vm.reg.password == vm.reg.passwordConfirm && !vm.check.userAlready){
                    vm.registerNew();
                }
                else if(vm.check.inputCode.toLowerCase() == vm.check.generateCode){
                    vm.submit();
                }
            }
        }
    },
    watch: {
        'check.inputCode'(val){
        this.checkCodeValue();
        },
        'reg.username'(){
        this.checkUser();
        },
        'reg.passwordConfirm'(){
        this.checkConfirm()
        }
    },
    mounted () {
        // chrome and ie
        // document.documentElement.addEventListener('mousewheel',this.handleScroll,false)
        //// firefox
        // document.documentElement.addEventListener('DOMMouseScroll',this.handleScroll,false)
    },
    methods: {
        checkCodeValue() {
            if (this.check.inputCode && this.check.inputCode.length >= this.check.generateCode.length) {
                this.check.codeError = (this.check.inputCode.toLowerCase() !== this.check.generateCode);
                return;
            }
            this.check.codeError = false;
        },            
        getCode(code){
            if (code) {
                this.check.generateCode = code;
            }
        },
        checkConfirm() {
            if(this.reg.password && this.reg.passwordConfirm && this.reg.passwordConfirm.length >= this.reg.password.length){
                this.check.checkPassWrong = (this.reg.passwordConfirm !== this.reg.password);
                return;
            }
            this.check.checkPassWrong = false;
        },
        checkUser () {
            checkOnly(this.reg.username).then(
                result => {
                    this.check.userAlready = result?false:true;
                }
            )
        },
        submit () {
            if (!this.$refs.loginUsername.value || !this.$refs.loginPassword.value) {
                this.error = true;
                return;
            }
            this.loading = true;
            login({
                username:this.$refs.loginUsername.value.trim(),
                password:this.$refs.loginPassword.value,
                loginFrom: 'student'
            })
            .then(res => {
                if (res && res.ok == '1')  {
                    this.$router.replace({name: 'App'});
                } else {
                    this.error = true;
                }
                this.loading = false;
            }, () => {
                this.error = true;
                this.loading = false;
            });
        },
        registerNew() {
            if (!this.reg.region) {
                this.check.schoolError = true;
                return;
            }
            if (!this.reg.name) {
                this.check.nameError = true;
                return;
            }
            if (!this.reg.username) {
                this.check.phoneError = true;
                return;
            }
            if (!this.reg.password) {
                this.check.passwordError = true;
                return;
            }
            this.loading = true;
            register(this.reg).then(result => {
                if(result){
                    this.$alert('注册成功', '提示', {confirmButtonText: '确定'})
                    this.state.indexType = 1;
                    this.loading = false;
                }
            }, () => {
                this.$alert('注册失败', '提示', {confirmButtonText: '确定'})
                this.loading = false;
            });
        },
        changeCarousel(val){
            this.state.carouselIndex = val;
        },
        handleScroll(e){
            if(this.pageIndex != 2) return;
            if(e.wheelDelta != undefined){
                if(e.wheelDelta > 0){
                    this.$refs.carousel.prev();
                }
                else{
                    this.$refs.carousel.next();
                }
            }
            else{
                if(e.detail > 0){
                    this.$refs.carousel.next();
                }
                else{
                    this.$refs.carousel.prev();
                }
            }
        }
    },
    beforeDestroy() {
        // document.documentElement.removeEventListener('mousewheel',() => {});
        // document.documentElement.removeEventListener('DOMMouseScroll',() => {});
    }
}