"use strict";(self.webpackChunkangular_starter=self.webpackChunkangular_starter||[]).push([[421],{9421:(Z,n,s)=>{s.r(n),s.d(n,{ExerciceModule:()=>h});var a=s(6814),t=s(95),u=s(11);class m{constructor(){this.name="",this.releaseDate="03/01/1892",this.franchise=!1,this.budget=0,this.worldwide=0,this.summary=""}}var e=s(4769);const c=[{path:"",component:(()=>{class o{constructor(){this.name=new t.NI(""),this.releaseDate=new t.NI(""),this.franchise=new t.NI(!0),this.budget=new t.NI(0),this.worldwide=new t.NI(0),this.summary=new t.NI(""),this.movie=new m}ngOnInit(){this.updateControls()}updateClass(){this.movie.name="Avengers: Endgame",this.movie.releaseDate="26/04/2019",this.movie.franchise=!0,this.movie.budget=356e6,this.movie.worldwide=2797800564,this.movie.summary="After the devastating events of Avengers: Infinity War (2018), the universe is in ruins."}updateControls(){this.updateClass(),this.name.setValue(this.movie.name),this.releaseDate.setValue(this.movie.releaseDate),this.franchise.setValue(this.movie.franchise),this.budget.setValue(this.movie.budget),this.worldwide.setValue(this.movie.worldwide),this.summary.setValue(this.movie.summary)}resetControls(){this.name.setValue(null),this.releaseDate.setValue(null),this.franchise.setValue(null),this.budget.setValue(null),this.worldwide.setValue(null),this.summary.setValue(null)}static#e=this.\u0275fac=function(l){return new(l||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-form-control-class"]],decls:72,vars:15,consts:[[1,"card"],[1,"card-body"],[1,"row"],[1,"col-12","col-sm-12","col-md-7","col-lg-7","col-xl-7"],[1,"card-title","text-center","text-info"],[1,"row","g-3"],[1,"col-12","col-sm-12","col-md-6","col-lg-6","col-xl-6"],["for","name",1,"form-label"],["type","text","id","name",1,"form-control",3,"formControl"],["for","releaseDate",1,"form-label"],["type","text","id","releaseDate",1,"form-control",3,"formControl"],["for","budget",1,"form-label"],["type","text","id","budget",1,"form-control",3,"formControl"],["for","worldwide",1,"form-label"],["type","text","id","worldwide",1,"form-control",3,"formControl"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12"],["for","summary",1,"form-label"],["id","summary","rows","3","id","summary",1,"form-control",3,"formControl"],[1,"col-12","col-sm-12","col-md-3","col-lg-3","col-xl-3"],[1,"form-check"],["type","checkbox","id","franchise",1,"form-check-input",3,"formControl"],["for","franchise",1,"form-check-label"],["type","submit",1,"btn","btn-primary","btn-sm",3,"click"],[1,"col-12","col-sm-12","col-md-5","col-lg-5","col-xl-5"]],template:function(l,r){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),e._uU(5,"FormControl with Class"),e.qZA(),e.TgZ(6,"form",5)(7,"div",6)(8,"label",7),e._uU(9,"Name"),e.qZA(),e._UZ(10,"input",8),e.qZA(),e.TgZ(11,"div",6)(12,"label",9),e._uU(13,"Release Date"),e.qZA(),e._UZ(14,"input",10),e.qZA(),e.TgZ(15,"div",6)(16,"label",11),e._uU(17,"Budget"),e.qZA(),e._UZ(18,"input",12),e.qZA(),e.TgZ(19,"div",6)(20,"label",13),e._uU(21,"Worldwide"),e.qZA(),e._UZ(22,"input",14),e.qZA(),e.TgZ(23,"div",15)(24,"label",16),e._uU(25,"Summary"),e.qZA(),e._UZ(26,"textarea",17),e.qZA(),e.TgZ(27,"div",18)(28,"div",19),e._UZ(29,"input",20),e.TgZ(30,"label",21),e._uU(31," Franchise "),e.qZA()()(),e.TgZ(32,"div",18)(33,"button",22),e.NdJ("click",function(){return r.resetControls()}),e._uU(34,"Reset"),e.qZA()(),e.TgZ(35,"div",18)(36,"button",22),e.NdJ("click",function(){return r.updateControls()}),e._uU(37,"Update"),e.qZA()()()(),e.TgZ(38,"div",23)(39,"h5",4),e._uU(40,"FormControl Result"),e.qZA(),e.TgZ(41,"strong"),e._uU(42,"Name"),e.qZA(),e._uU(43),e._UZ(44,"br"),e.TgZ(45,"strong"),e._uU(46,"Release Date"),e.qZA(),e._uU(47),e._UZ(48,"br"),e.TgZ(49,"strong"),e._uU(50,"Budget"),e.qZA(),e._uU(51),e._UZ(52,"br"),e.TgZ(53,"strong"),e._uU(54,"Worldwide"),e.qZA(),e._uU(55),e._UZ(56,"br"),e.TgZ(57,"strong"),e._uU(58,"Summary"),e.qZA(),e._uU(59),e._UZ(60,"br"),e.TgZ(61,"strong"),e._uU(62,"Franchise"),e.qZA(),e._uU(63),e._UZ(64,"br"),e.TgZ(65,"h5",4),e._uU(66,"Movie Class Result"),e.qZA(),e.TgZ(67,"strong"),e._uU(68,"Movie"),e.qZA(),e._uU(69),e.ALo(70,"json"),e._UZ(71,"br"),e.qZA()()()()),2&l&&(e.xp6(10),e.Q6J("formControl",r.name),e.xp6(4),e.Q6J("formControl",r.releaseDate),e.xp6(4),e.Q6J("formControl",r.budget),e.xp6(4),e.Q6J("formControl",r.worldwide),e.xp6(4),e.Q6J("formControl",r.summary),e.xp6(3),e.Q6J("formControl",r.franchise),e.xp6(14),e.hij(" : ",r.name.value,""),e.xp6(4),e.hij(" : ",r.releaseDate.value,""),e.xp6(4),e.hij(" : ",r.budget.value,""),e.xp6(4),e.hij(" : ",r.worldwide.value,""),e.xp6(4),e.hij(" : ",r.summary.value,""),e.xp6(4),e.hij(" : ",r.franchise.value,""),e.xp6(6),e.hij(" : ",e.lcZ(70,13,r.movie),""))},dependencies:[t._Y,t.Fj,t.Wl,t.JJ,t.JL,t.F,t.oH,a.Ts]})}return o})(),children:[]}];let d=(()=>{class o{static#e=this.\u0275fac=function(l){return new(l||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(c),u.Bz]})}return o})(),h=(()=>{class o{static#e=this.\u0275fac=function(l){return new(l||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[a.ez,d,t.u5,t.UX]})}return o})()}}]);