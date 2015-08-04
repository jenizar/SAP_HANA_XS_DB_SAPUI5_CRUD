var email = $.request.parameters.get('EMAIL');
var firstname = $.request.parameters.get('FIRSTNAME');
var lastname = $.request.parameters.get('LASTNAME');
var age = $.request.parameters.get('AGE');
var address = $.request.parameters.get('ADDRESS');

var conn = $.db.getConnection();  
var pstmt = conn.prepareStatement( "INSERT INTO NEO_0K1ZGG9JLRXD8WF0JOAXBWJG4.PERSONAL VALUES(?,?,?,?,?)" );
pstmt.setString(1,email);  
pstmt.setString(2,firstname);  
pstmt.setString(3,lastname); 
pstmt.setString(4,age);
pstmt.setString(5,address);
pstmt.execute();  
conn.commit();  
$.response.contentType = 'text/plain';
    $.response.setBody('Data Inserted');
    $.response.status = 200;    
/*
https://s2hanaxs.hanatrial.ondemand.com/p1146569trial/test1/hihanaxs/adddata.xsjs?email=jenizar@hotmail.com&firstname=john&lastname=eswin&age=41&address=Jakarta        
*/