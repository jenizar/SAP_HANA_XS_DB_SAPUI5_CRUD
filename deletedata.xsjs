var email = $.request.parameters.get('EMAIL');

var conn = $.db.getConnection();  
var pstmt = conn.prepareStatement( "delete from NEO_0K1ZGG9JLRXD8WF0JOAXBWJG4.PERSONAL where EMAIL=?" );
//pstmt.setString(1,email);  
pstmt.setString(1,email);
pstmt.execute();  
conn.commit();  
$.response.contentType = 'text/plain';
    $.response.setBody('Data Deleted');
    $.response.status = 200; 
var rs = pstmt.executeQuery();

/*
https://s2hanaxs.hanatrial.ondemand.com/p1146569trial/test1/hihanaxs/deletedata.xsjs?email=jenizar@hotmail.com
*/