(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7fdfa28"],{3636:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[a("statistics-card-line",{attrs:{icon:"UsersIcon",statistic:"92.6k",statisticTitle:"Subscribers Gained",chartData:e.analyticsData.subscribersGained,type:"area"}})],1),a("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[a("statistics-card-line",{attrs:{icon:"DollarSignIcon",statistic:"97.5K",statisticTitle:"Revenue Generated",chartData:e.analyticsData.revenueGenerated,color:"success",type:"area"}})],1),a("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[a("statistics-card-line",{attrs:{icon:"ShoppingCartIcon",statistic:"36%",statisticTitle:"Quarterly Sales",chartData:e.analyticsData.quarterlySales,color:"danger",type:"area"}})],1),a("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[a("statistics-card-line",{attrs:{icon:"ShoppingBagIcon",statistic:"97.5K",statisticTitle:"Orders Received",chartData:e.analyticsData.ordersRecevied,color:"warning",type:"area"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[a("statistics-card-line",{attrs:{icon:"MonitorIcon","icon-right":"",statistic:"78.9k",statisticTitle:"Site Traffic",chartData:e.analyticsData.siteTraffic}})],1),a("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[a("statistics-card-line",{attrs:{icon:"UserCheckIcon","icon-right":"",statistic:"659.8k",statisticTitle:"Active Users",chartData:e.analyticsData.activeUsers,color:"success"}})],1),a("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[a("statistics-card-line",{attrs:{icon:"MailIcon","icon-right":"",statistic:"28.7k",statisticTitle:"Newsletter",chartData:e.analyticsData.newsletter,color:"warning"}})],1)])])},o=[],r=a("43ca"),i=a("da24"),l={data:function(){return{analyticsData:i["a"]}},components:{StatisticsCardLine:r["a"]}},n=l,c=a("0c7c"),d=Object(c["a"])(n,s,o,!1,null,null,null);t["default"]=d.exports},"43ca":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{staticClass:"overflow-hidden"},[a("div",{attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"p-6 pb-0",class:{"flex justify-between flex-row-reverse items-center":e.iconRight}},[a("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+e.color,{"mb-4":!e.iconRight}],style:{background:"rgba(var(--vs-"+e.color+"),.15)"},attrs:{icon:e.icon}}),a("div",[a("h2",{staticClass:"mb-1 font-bold"},[e._v(e._s(e.statistic))]),a("span",[e._v(e._s(e.statisticTitle))])])],1),a("div",{staticClass:"line-area-chart",attrs:{id:e.chartData.id}},[a("vue-apex-charts",{ref:"apexChart",attrs:{type:e.type,height:"100",width:"100%",options:e.chartData.chartOptions,series:e.chartData.series}})],1)])])},o=[],r=(a("6b54"),a("28a5"),a("c5f6"),a("1321")),i=a.n(r),l={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{type:Object,required:!0},color:{type:String,default:"primary"},chartType:{type:String,default:"line-chart"},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex()}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(this.color));return e=e.split(","),"#"+((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1)}},components:{VueApexCharts:i.a},created:function(){"area"==this.type&&(this.chartData.chartOptions["theme"]={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}})}},n=l,c=a("0c7c"),d=Object(c["a"])(n,s,o,!1,null,null,null);t["a"]=d.exports},da24:function(e,t,a){"use strict";t["a"]={siteTraffic:{series:[{name:"Traffic Rate",data:[150,200,125,225,200,250]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#7367F0"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#A9A2F6"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},activeUsers:{series:[{name:"Active Users",data:[750,1e3,900,1250,1e3,1200,1100]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#28C76F"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#55DD92"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},newsletter:{series:[{name:"Newsletter",data:[365,390,365,400,375,400]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#FF9F43"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#ffc085"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},revenueComparisonLine:{series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],chartOptions:{chart:{toolbar:{show:!1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:"#e7e7e7"},legend:{show:!1},colors:["#F97794","#b8c2cc"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0","#b8c2cc"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}}},subscribersGained:{series:[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},quarterlySales:{series:[{name:"Sales",data:[10,15,7,12,3,16]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},revenueGenerated:{series:[{name:"Revenue",data:[350,275,400,300,350,300,450]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},ordersRecevied:{series:[{name:"Orders",data:[10,15,8,15,7,12,8]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},salesBar:{series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"bar",sparkline:{enabled:!0},toolbar:{show:!1}},states:{hover:{filter:"none"}},colors:["#e6edf7","#e6edf7","#7367f0","#e6edf7","#e6edf7","#e6edf7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}}}},goalOverviewRadialBar:{series:[83],chartOptions:{plotOptions:{radialBar:{size:110,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#bfc5cc",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:"#99a2ac",fontSize:"4rem"}}}},colors:["#00db89"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},supportTrackerRadialBar:{chartData:{totalTickets:163,openTickets:103,lastResponse:"1d"},series:[83],chartOptions:{plotOptions:{radialBar:{size:150,offsetY:15,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{value:{offsetY:30,color:"#99a2ac",fontSize:"2rem"}}}},colors:["#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#7367F0"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},chart:{sparkline:{}},labels:["Completed Tickets"]}},statisticsRadar:{series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],chartOptions:{labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0}}},sessionsByDeviceDonut:{analyticsData:[{device:"Dekstop",icon:"MonitorIcon",color:"primary",sessionsPercentgae:58.6,comparedResultPercentage:2},{device:"Mobile",icon:"SmartphoneIcon",color:"warning",sessionsPercentgae:34.9,comparedResultPercentage:8},{device:"Tablet",icon:"TabletIcon",color:"danger",sessionsPercentgae:6.5,comparedResultPercentage:-5}],comparedResult:[2,-3,8],series:[58.6,34.9,6.5],chartOptions:{labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},chart:{offsetY:30,type:"donut",toolbar:{show:!1}},stroke:{width:0},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},productOrdersRadialBar:{analyticsData:[{orderType:"Finished",counts:23043,color:"primary"},{orderType:"Pending",counts:14658,color:"warning"},{orderType:"Rejected ",counts:4758,color:"danger"}],series:[70,52,26],chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:165,offsetY:30,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15},dataLabels:{show:!0,name:{fontSize:"18px"},value:{fontSize:"16px",color:"#636a71",offsetY:11},total:{show:!0,label:"Total",formatter:function(){return 42459}}}}},responsive:[{breakpoint:576,options:{plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15}}}}}],colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,gradientToColors:["#9c8cfc","#FFC085","#f29292"],inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},customersPie:{analyticsData:[{customerType:"New",counts:890,color:"primary"},{customerType:"Returning",counts:258,color:"warning"},{customerType:"Referrals ",counts:149,color:"danger"}],series:[690,258,149],chartOptions:{labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},chart:{type:"pie",offsetY:30,dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:5},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},salesLine:{series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,top:20,left:2,blur:6,opacity:.2}},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebebeb"},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(e){return e>999?(e/1e3).toFixed(1)+"k":e}}},tooltip:{x:{show:!1}}}},clientRetentionBar:{series:[{name:"New Clients",data:[175,125,225,175,160,189,206,134,159,216,148,123]},{name:"Retained Clients",data:[-144,-155,-141,-167,-122,-143,-158,-107,-126,-131,-140,-137]}],chartOptions:{grid:{borderColor:"#ebebeb",padding:{left:0,right:0}},legend:{show:!1},dataLabels:{enabled:!1},chart:{stacked:!0,type:"bar",toolbar:{show:!1}},colors:["#7367F0","#EA5455"],plotOptions:{bar:{columnWidth:"10%"}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"}}},tooltip:{x:{show:!1}}}},browserAnalytics:[{id:1,name:"Google Chrome",ratio:73,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"800"},{id:3,name:"Opera",ratio:8,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-200"},{id:2,name:"Firefox",ratio:19,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"100"},{id:4,name:"Internet Explorer",ratio:27,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-450"}]}}}]);
//# sourceMappingURL=chunk-a7fdfa28.4183cccd.js.map