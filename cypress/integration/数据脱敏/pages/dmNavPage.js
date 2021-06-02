export default class NavPage {
    constructor() {
        this.homepage = '.active > a'                                                   //首页
        this.yuanhmb = '[has-permission="1"] > a'                                       //源和目标
        this.mingfx = '[ng-class="{active: main.urlActive(\'discoverytask\')}"] > a'    //敏感发现
        this.tuomy = '[ng-class="{active: main.urlActive(\'sensitive\')}"] > a'         //脱敏源
        this.tuomzy = '[ng-class="{active: main.urlActive(\'jobs\')}"] > a'             //脱敏作业
        this.tuomcl = '[has-permission="25"] > a'                                       //脱敏策略
        this.xitbb = '.pointer'                                                         //系统报表
        this.xitgl = '[has-permission="41"] > a'                                        //系统管理
        this.shujsy = '[has-permission="63"] > a'                                       //数据溯源
    }

}