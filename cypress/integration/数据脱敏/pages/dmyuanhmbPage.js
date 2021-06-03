export default class yuanhmbPage {
    constructor() {

        this.new = '[ng-click="source.addFun()"]'                                        //新增
        this.del = '[ng-click="source.deleteFun()"]'                                     //删除
        this.bathauth = '[ng-click="source.openAuthority(\'batch\')"]'                  //批量授权
        this.hadoop = '[ng-click="source.HadoopConfig()"]'                              //hadoop集群配置

        //弹窗确认
        this.popupConfirm=".layui-layer-btn0"
        this.popupCancel=".layui-layer-btn1"
        //搜索
        this.searchtype = "[ng-model=\"source.listObj.searchPtype\"]"
        this.searchsubtype = "[ng-model=\"source.listObj.searchCType\"]"
        this.searchname= ".searchBox > .col-lg-8 > .ng-valid-maxlength"
        this.searchusername = "[ng-model=\"source.listObj.groupId\"]"
        this.searchyuan = "[ng-model=\"source.ioType\"]"
        this.searchbtn = '.col-lg-8 > .btn'                                                //搜索

        //new
        this.newname = ':nth-child(1) > .col-lg-6 > .form-control'
        this.newtype = ':nth-child(2) > .col-lg-3 > .form-control'
        this.newsubtype = ':nth-child(3) > .col-lg-3 > .form-control'
        this.newredioyuan = '#a'
        this.newrediomubiao = '#b'
        this.newnextbtn = '[ng-show="addModel.step == \'first\'"] > .modal-footer > .btn'


        //关系型数据库
        this.newtoname = "#scroll > .form-horizontal > :nth-child(1) > .col-lg-6 > .form-control"
        this.newIpadress = ':nth-child(2) > .col-lg-6 > .form-control'
        this.newdatabasename = ':nth-child(4) > .col-lg-6 > .form-control'
        this.newport = ':nth-child(3) > .col-lg-6 > .form-control'

        this.newusername = ':nth-child(5) > .col-lg-6 > .form-control'
        this.newpassword = ':nth-child(6) > .col-lg-6 > .form-control'
        this.newconfirm = '[ng-if="addModel.step == \'db\'"] > .modal-footer > [data-text="确定"]'

        this.newcode = '[ng-show="addModel.cType.code === \'DBF\' || addModel.cType.code === \'XML\' || addModel.cType.code === \'JSON\' || addModel.cType.code === \'MySQL dump\'"] > .col-lg-6 > .form-control'
        this.newrediobendi = '#local'
        this.newredioyemiansc = '#upload'
        this.newredioyuanchengwj = '#remote'
        this.newfiledirectory = '.form-group.ng-scope > .col-lg-6 > .form-control'

        //编辑源和目标
        this.yuanedit = "[ng-click=\"source.editModel(item)\"]"
        this.yuaneditname = ":nth-child(1) > .col-lg-6 > .form-control"
        this.yuaneditnextstep = "[ng-show=\"addModel.step == 'first'\"] > .modal-footer > .btn"
        this.yuaneditconfirm = "[ng-if=\"addModel.step == 'db'\"] > .modal-footer > [data-text=\"确定\"]"

    }

}