Tutorial SAPUI5 Create, Read, Update, Delete with SAP HANA XS & SAP HANA DB Step by Step
by: John Eswin Nizar

1. Log On : https://account.hanatrial.ondemand.com/

2. Choose on the menu HANA XS Applications

3. Click : Open in Web-based Development Workbench

4. On the page SAP HANA Web-based Development Workbench : Editor 
   Click drop down icon (+), choose Catalog

5. On the page SAP HANA Web-based Development Workbench: Catalog
   Click icon SQL 
   
6. On the tab untitled0.sql, paste script below:
   CREATE COLUMN TABLE "NEO_0K1ZGG9JLRXD8WF0JOAXBWJG4"."PERSONAL" ("EMAIL" NVARCHAR(30), "FIRSTNAME" NVARCHAR(30), "LASTNAME" NVARCHAR(30), "AGE" NVARCHAR(3), "ADDRESS" NVARCHAR(50))

7. Fill the data into PERSONAL table, paste script below :
INSERT INTO "NEO_0K1ZGG9JLRXD8WF0JOAXBWJG4"."PERSONAL" VALUES(
	/*EMAIL <NVARCHAR(30)>*/'dirk.brian@example.com',
	/*FIRSTNAME <NVARCHAR(30)>*/'Dirk',
	/*LASTNAME <NVARCHAR(30)>*/'Brian',
	/*AGE <NVARCHAR(3)>*/'49',
	/*ADDRESS <NVARCHAR(50)>*/'Exeter, England'
);

8. Back to page SAP HANA Web-based Development Workbench : Editor
   Click Content -> p1146569trial -> test1 
   Right click : Choose Create Package
      Name : Contacts  
        Right click : Choose Create File
        a.  Name : menu.html  
        Right click : Choose Create File
        b.  Name : jsondata.xsjs
        Right click : Choose Create File
        c.  Name : adddata.xsjs
        Right click : Choose Create File
        d.  Name : editdata.xsjs
        Right click : Choose Create File
        e.  Name : deletedata.xsjs
        Right click : Choose Create File
        f.  Name : .xsapp 
        Right click : Choose Create File
        g.  Name : .xsaccess

9. Test it

10. Enjoy! 

 

        
           
 



