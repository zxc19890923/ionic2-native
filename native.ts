1. 不需要想其他组件（ionic-angular)使用的时候要在构造函数中初始化 construct(public navCtrl: NavController) {}

2. 直接在 explort class xx {}中直接使用，调用方法， 一般let定义的信息在外面，他也可以在里面定义成this变量的形式。

3. 测试过程中 浏览器端 ionic-serve 可能会报错，无法浏览   ionic run ios/ionic run android模拟机或者真机上浏览器

典型的用法 let定义变量
constructor(public loadingCtrl: LoadingController) {

}
// 自定义函数里面， 有可能是表单提交， 参数就是[(ngModel)]双向绑定的，所以要卸载explort里面的
presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}
