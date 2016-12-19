1. 不需要想其他组件（ionic-angular)使用的时候要在构造函数中初始化 construct(public navCtrl: NavController) {}

2. 直接在 explort class xx {}中直接使用，调用方法， 一般let定义的信息在外面，他也可以在里面定义成this变量的形式。

3. 测试过程中 浏览器端 ionic-serve 可能会报错，无法浏览   ionic run ios/ionic run android模拟机或者真机上浏览器
