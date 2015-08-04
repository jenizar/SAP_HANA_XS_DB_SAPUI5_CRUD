var select_all_personals_query =  
                    "select * from NEO_0K1ZGG9JLRXD8WF0JOAXBWJG4.PERSONAL";  
function close(closables) {  
          var closable;  
          var i;  
          for (i = 0; i < closables.length; i++) {  
                    closable = closables[i];  
                    if(closable) {  
                              closable.close();  
                    }  
          }  
}  
function getDataPersonals(){  
          var x1 = {
              UserSet: str
              };
          var dataPersonalsList = [];  
          var connection = $.db.getConnection();  
          var statement = null;  
          var resultSet = null;  
          try{  
                    statement = connection.prepareStatement(select_all_personals_query);  
                    resultSet = statement.executeQuery();  
                    var dataPersonal;  
             
                    while (resultSet.next()) {  
                              dataPersonal = {};  
                              dataPersonal.EMAIL = resultSet.getString(1);  
                              dataPersonal.FIRSTNAME = resultSet.getString(2);  
                              dataPersonal.LASTNAME = resultSet.getString(3);
                              dataPersonal.AGE = resultSet.getString(4);                              
                              dataPersonal.ADDRESS = resultSet.getString(5); 
                              dataPersonalsList.push(dataPersonal);  
                    }  
          } finally {  
                    close([resultSet, statement, connection]);  
          }  
//JSON.stringify(obj);        // '"bar"'
//JSON.stringify({ x: obj }); // '{"x":"bar"}'          
                var str = JSON.stringify({UserSet: dataPersonalsList});   
         return str;  
}  
function doGet() {  
          try{  
                    $.response.contentType = "application/json";  
                    $.response.setBody(getDataPersonals());             
          }  
          catch(err){  
                    $.response.contentType = "text/plain";  
                    $.response.setBody("Error while executing query: [" + err.message + "]");  
                    $.response.returnCode = 200;  
          }  
}  
doGet();  