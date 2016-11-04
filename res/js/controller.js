var info=angular.module('onfoadd',[]);
info.controller('taskCtrl',function($scope,$http){
    $scope.task="";
    $scope.tasks=[];
    $scope.add=function(){
        $http({
            method:"get",
            url:"http://localhost:3434/php/add.php",
            params:{uname:$scope.task}
        })
            .success(function(resp){
                var add={"name":$scope.task,"id":resp.ID}
                var nulls="";
                if(resp.isno){
                    //	$scope.geng();
                    $scope.tasks.push(add)
                    $scope.task=nulls;
                    alert("添加成功"+$scope.task);

                }else{
                    alert("添加失败");
                }
            })
    }
    $scope.remove=function(i){
        var data=this.item.id;
        var falsse="";
        $http({
            method:"get",
            url:"http://localhost:3434/php/Delete.php",
            params:{"id":data},

        })
            .success(function(resp){
                if(resp==-1){
                    alert("删除失败");
                }else{
                    $scope.tasks.splice(i,1)
                    alert("删除成功");

                }

            })
            .error(function(resp){
                alert("操作失败");
            })


    }
    $scope.geng=function(){
        $http.get("http://localhost:3434/php/list.php")
            .success(function(resp){
                $scope.tasks = resp.user;
            })
    }
    $scope.geng();

});
var popup=angular.module("onfoadd"["ui.bootstrap"]);
