
window.addEventListener("load",dataScript);

function dataScript(){
    var btn = document.getElementById('btnSubmit');

    btn.addEventListener("click",function(){
        console.log("clicked");
    });

    var str1 = 'abc02';
    var str2 = 'sdada33';

    console.log("Calculate : " + parseInt(str1) + parseInt(str2));
    console.log("Merge " + str1 + str2);


    var data = [{id:1,info:[{name:'jaydeep'}]},{id:33,info:[{name:'sdsdf'}]}];

    data.forEach(
        function onNext(e){
            console.log(e);
            throw 'error';
        },
        function onError(error)
        {
            console.log("error");
        },
        function onCompleted()
        {
            console.log("completed");
        }
    );
	
	
	var branch;
	var service;
	var queue;
	
	
	var appointment;
	var schedule;
	
	var statastic;
	var LDAP;
	
	public feature_add()
	{
		
	}

	public feature_delete()
	{
		
	}

}