
/*
 * GET home page.
 */
function FormatNum(Source,Length){ 
        var strTemp=""; 
        for(i=1;i<=Length-Source.length;i++){ 
        strTemp+="0"; 
        } 
        return strTemp+Source; 
      } 
function Today(){
   date = new Date()
   strTemp=''
   year = date.getFullYear();
   month = date.getMonth()+1;
   day = date.getDate()-1;
  if(2-day.toString().length==1){ 
    day = '0'+day; 
  } 
  if(2-month.toString().length==1){ 
    month = '0'+month; 
  } 
  today = year+"/"+month+"/"+day
  console.log(today)
};

module.exports = function(app){
    app.get('/',function (req,res){
        res.render('index', { title: 'log' ,
                              name:'Analyse'});
    });
    app.get('/:project',function (req,res){

        res.render('index_p', {title: req.params.project ,
                               name : req.params.project});
    });
    //用户访问api流量统计
    app.get('/visit/:project',function (req,res){
        Today();
        res.render('visit', {title: req.params.project ,
                             year:year,
                             month:month,
                             day:day,
                             file : req.params.project+"_"+year+month+day+".csv"});
    });
    app.get('/visit/:project/:yyyy/:mm/:dd',function (req,res){

        res.render('visit', {title: req.params.project ,
                             year:req.params.yyyy,
                             month:req.params.mm,
                             day:req.params.dd,
                             file : req.params.project+"_"+req.params.yyyy+req.params.mm+req.params.dd+".csv"});
    });
    app.get('/visit/:project/:yyyy/:mm/:dd/online',function (req,res){

        res.render('visit', {title: req.params.project ,
                             year:req.params.yyyy,
                             month:req.params.mm,
                             day:req.params.dd,
                             file : req.params.project+"_"+req.params.yyyy+req.params.mm+req.params.dd+"_online.csv"});
    });
    //用户请求分类统计circle_pack
	  app.get('/req/circlepack/:project',function (req,res){
        Today();
        res.render('circlepack', {title: req.params.project ,
                                  style: "circlepack",
                                  year:year,
                                  month:month,
                                  day:day,
                                  file : req.params.project+"_"+year+month+day+"_req.json"});
    });    
    app.get('/req/circlepack/:project/:yyyy/:mm/:dd',function (req,res){

        res.render('circlepack', {title: req.params.project ,
                                  style: "circlepack",
                                  year:req.params.yyyy,
                                  month:req.params.mm,
                                  day:req.params.dd,
                                  file : req.params.project+"_"+req.params.yyyy+req.params.mm+req.params.dd+"_req.json"});
    });
    //用户请求分类统计bubble
    app.get('/req/bubble/:project',function (req,res){
        Today();
        res.render('bubble', {title: req.params.project ,
                              style: "bubble",
                              year:year,
                              month:month,
                              day:day,
                              file : req.params.project+"_"+year+month+day+"_req.json"});
    });    
    app.get('/req/bubble/:project/:yyyy/:mm/:dd',function (req,res){
        console.log(req.params.project+"_"+req.params.mm+req.params.dd+"_req.json")
        res.render('bubble', {title: req.params.project ,
                              style: "bubble",
                              year:req.params.yyyy,
                              month:req.params.mm,
                              day:req.params.dd,
                              file : req.params.project+"_"+req.params.yyyy+req.params.mm+req.params.dd+"_req.json"});
    });
  }