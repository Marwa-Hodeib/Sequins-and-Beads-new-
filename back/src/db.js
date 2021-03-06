import sqlite from "sqlite";

const initializeDB = async () => {
  const db = await sqlite.open("./src/db.sqlite");
/*      await db.run(`CREATE TABLE admin (
        admin_id integer NOT NULL CONSTRAINT admin_pk PRIMARY KEY,
        admin_user text NOT NULL UNIQUE,
        admin_pass text NOT NULL
      );`) */    
/*      await db.run(`CREATE TABLE category (
        category_id integer NOT NULL CONSTRAINT category_pk PRIMARY KEY,
        category_name text NOT NULL UNIQUE
      );`) */    
/*      await db.run(`CREATE TABLE collection (
        collection_id integer NOT NULL CONSTRAINT collection_pk PRIMARY KEY,
        collection_name text NOT NULL UNIQUE,
        collection_flag integer NOT NULL,
        collection_image text NOT NULL
      );`) */    
/*      await db.run(`CREATE TABLE product (
        product_id integer NOT NULL CONSTRAINT product_pk PRIMARY KEY,
        product_name text NOT NULL UNIQUE,
        product_description text NOT NULL,
        product_price integer NOT NULL,
        product_quantity integer NOT NULL,
        product_date text NOT NULL,
        category_category_id integer NOT NULL,
        collection_collection_id integer NOT NULL,
        CONSTRAINT product_category FOREIGN KEY (category_category_id)
        REFERENCES category (category_id),
        CONSTRAINT product_collection FOREIGN KEY (collection_collection_id)
        REFERENCES collection (collection_id)
      );`) */     
/*      await db.run(`CREATE TABLE image (
        image_id integer NOT NULL CONSTRAINT image_pk PRIMARY KEY,
        productimage1.jpg_product_id integer NOT NULL,
        image_name text NOT NULL,
        CONSTRAINT image_product FOREIGN KEY (product_product_id)
        REFERENCES product (product_id)
      );`) */      
/*      await db.run(`CREATE TABLE orders (
        orders_id integer NOT NULL CONSTRAINT order_pk PRIMARY KEY,
        orders_date text NOT NULL,
        orders_quantity integer NOT NULL,
        orders_amount integer NOT NULL,
        product_product_id integer NOT NULL,
        client_name text NOT NULL UNIQUE,
        area text NOT NULL,
        CONSTRAINT order_product FOREIGN KEY (product_product_id)
        REFERENCES product (product_id)
      );`) */     
  
//  await db.run(`insert into collection (collection_name,collection_flag,collection_image) values ('summer',1,'image1.jpg');`)
//  await db.run(`insert into collection (collection_name,collection_flag,collection_image) values ('winter',0,'image2.jpg');`)
//  await db.run(`insert into collection (collection_name,collection_flag,collection_image) values ('autumn',0,'image3.jpg');`)
// await db.run(`insert into collection (collection_name,collection_flag,collection_image) values ('spring',0,'84d71e19-1e9a-4523-8579-09db4e849a2e.jpg');`)

//  await db.run(`insert into admin (admin_user,admin_pass) values ('admin','admin');`)

//  await db.run(`insert into category (category_name) VALUES('bracelet')`)
//  await db.run(`insert into category (category_name) VALUES('ring')`)

/*    await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name",20000,5,1,2)`) */    
/*    await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name1",20000,5,2,1)`) */    
/*    await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name2",20000,5,1,1)`) */   
/*    await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name3",20000,5,1,2)`) */   
/*    await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name4",20000,5,2,1)`) */    
/*    await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name5",20000,5,1,2)`) */   
  
/*    await db.run(`INSERT INTO orders
      ("orders_date", "orders_quantity", "orders_amount", "product_product_id", "client_name", "area")
       VALUES ('2-2-2020', 2, 20000, 1, 'joe', 'beirut'); `) */   
/*      await db.run(`INSERT INTO orders
        ("orders_date", "orders_quantity", "orders_amount", "product_product_id", "client_name", "area")
        VALUES ('2-1-2020', 2, 20000, 2, 'najwa', 'zahle'); `) */    

//   await db.run(`insert into image ("product_product_id" ,"image_name") values (1,'image2.jpg')`)
//   await db.run(`insert into image ("product_product_id" ,"image_name") values (2,'image2.jpg')`)
//   await db.run(`insert into image ("product_product_id" ,"image_name") values (1,'image3.jpg')`)
//   await db.run(`insert into image ("product_product_id" ,"image_name") values (3,'background_contact_2.jpg')`)
//   await db.run(`insert into image ("product_product_id" ,"image_name") values (4,'background_contact_3.jpg')`)
//   await db.run(`insert into image ("product_product_id" ,"image_name") values (5,'bb9ada3f3064dc11b8760688a02e7982.jpg')`)
//   await db.run(`insert into image ("product_product_id" ,"image_name") values (6,'Bohemia-Alloy-Multi-layers-Gold-Silver-Beads-Sequins-3-Pieces-Set-Bracelet-For-Women-Jewelry-Foot-Ch-32946889582-8222-843x800.jpeg')`)



////////////*********Collection*************////////////

////////////*********CREATE*************////////////
  const createCollection = async (props) =>{
    const {name,flag}=props;
    if(name && flag ){
      if(flag==1 || flag==0){
        try{
          const rows = await db.run (`insert into collection (collection_name,collection_flag) values ('${name}',${flag})`);
          return rows.stmt.lastID;
        }catch(err){
          throw new Error("no connection to database");
        }
      }
      else
      throw new Error("enter flag 0 or 1")//flag==1 || flag==0
    }
    else
    throw new Error("enter flag and name");

  }
////////////*********READ*************////////////
  const getcollection = async (orderby) => {
    let query="select * from collection";
     switch(orderby){
      case "name":
        query+=" order by collection_name";
        break;
      default:break;
    }
    try {
      const rows = await db.all(query);
      if (rows.length == 0) {
        throw new Error("Collection is empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of collection");
    } 
  };
  const getcollectionById = async (id) => {
    id=parseInt(id);
    if(!isNaN(id)){
      try{
        const rows = await db.all(`select * from collection where collection_id =${id} `);
        if(rows.length>0){
        return rows;
        }
        else{
          throw new Error(`Collection with id=${id} is not found`)
        }
        }catch(err){
          throw new Error(`Can't retreive data`)
        }
      }
    else{
      throw new Error(`Enter id as a number`)
    }
   
  };
  const getcollectionByName = async(name) =>{
    try{
    const rows =  await db.all(`select * from collection where collection_name = '${name}'`);
    if(rows.length>0){
      return rows;
    }
    else{
      throw new Error(`Collection with name=${name} is not found`)
    }
    }catch(err){
      throw new Error(`Can't retrieve data`)
    }
  }
  const getcollectionByFlag = async(flag) =>{
    flag=parseInt(flag);
    if(!isNaN(flag)){
    try{
    const rows =  await db.all(`select * from collection where collection_flag = ${flag}`);
    if(rows.length>0){
      return rows;
    }
    else{
      throw new Error(`Collection with name=${name} is not found`)
    }
    }catch(err){
      throw new Error(`Can't retrieve data`)
    }
  }
  }
////////////*********UPDATE*************////////////
const updateCollection = async (id,props) =>{
  const {name,flag}=props;
  let query="";
  if(name && !flag){
    query=`update collection set collection_name='${name}' where collection_id=${id}`;
  }
  else if(!name && flag && (flag==1 || flag==0)){
    query=`update collection set collection_flag=${flag} where collection_id=${id}`;
  }
  else if(name && flag && (flag==1 || flag==0)){
    query=`update collection set collection_flag=${flag}, collection_name='${name}' where collection_id=${id}`;
  }
   try{
  const rows = await db.run(query);
  if(rows.stmt.changes>0)
    return true;
  else
    return false;
  }catch(err){
    throw new Error("no connection to database");
  } 
}

////////////*********DELETE*************////////////
  const deleteCollectionByID = async(id) =>{
    id=parseInt(id);
    if(!isNaN(id)){
      try{ 
        const rows = await db.run(`delete from collection where collection_id=${id}`);
        if(rows.stmt.changes>0){
          return true;
         }
         else 
         return false;
       }catch(err){
         throw new Error("not found"+err)
      }
    }
    else{
      throw new Error("Enter id as a number");
    }
   
  }

  const deleteCollectionByName = async (name) =>{
    try{
      const rows = await db.run (`delete from collection where collection_name='${name}'`);
      if(rows.stmt.changes>0){
        return true;
      }
      else 
      return false;}
      catch{
      throw new Error("not found");}
    }


////////////*********ADMIN*************////////////

////////////*********CREATE*************////////////
  const createAdmin= async (props) => {
    const {user,pass}=props;
    if(user && pass){
      try{
        const rows = await db.run(`insert into admin (admin_user,admin_pass) values ('${user}','${pass}')`);
        if(rows.stmt.changes>0)
          return rows.stmt.lastID;
        else
          return false;
      }catch(err){
        throw new Error("Error conection with database")
      } 
    }
    return "Enter user and pass";
  }
////////////*********READ*************////////////
  const getAdmin = async (req) => {
    let query ="select * from admin ";
    if(req=='name' || req=="NAME" || req=="Name") {
      query+="order by admin_user"; 
    }
    try{
    const rows = await db.all(query);
    return rows
    }catch(err){
      throw new Error("Error connection with database")
    }
  }

  const getAdminId = async (id) => {
    id=parseInt(id);
    if(!isNaN(id)){
      try{
        const rows = await db.all(`select * from admin where admin_id=${id}`);
        if(rows.length>0)
          return rows;
        else
          return false;
        }catch(err){
          throw new Error("Error conection with database")
        }
    }
    else{
      throw new Error("Enter id as a number")
    }
    
  }

  const getAdminName= async (name) => {
    try{
    const rows = await db.all(`select * from admin where admin_user='${name}'`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }
////////////*********UPDATE*************////////////
  const updateAdmin= async (id,props) => {
    const {user,pass}=props;
    let query=" ";
    if(user && pass){
      query=`update admin set admin_user='${user}', admin_pass='${pass}' where admin_id=${id}`;
    }
    else if(user && !pass)
      query=`update admin set admin_user='${user}' where admin_id=${id}`;
    else
      query=`update admin set admin_pass='${pass}' where admin_id=${id}`;
    try{
    const rows = await db.run(query);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    } 
  }
////////////*********DELETE*************////////////
  const deleteAdminId= async (id) => {
    id=parseInt(id);
    if(!isNaN(id)){
      try{
        const rows = await db.run(`delete from admin where admin_id=${id}`);
        if(rows.stmt.changes>0)
          return true;
        else
          return false;
        }catch(err){
          throw new Error("Error conection with database")
        }
    }
    else{
      throw new Error("Enter id that is number")
    }
   
  }
  const deleteAdminName= async (name) => {
    try{
    const rows = await db.run(`delete from admin where admin_user='${name}'`);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }
  
  
////////////*********ORDER*************////////////

////////////*********CREATE*************////////////
  const createOrder= async (props) => {
    let {date,quantity,amount,productID,clientName,area}=props;
    quantity=parseInt(quantity);
    amount=parseInt(amount);
    productID=parseInt(productID);
    if(date && quantity && amount && productID && clientName && area){
      if(!isNaN(amount) && !isNaN(quantity) && !isNaN(productID)){
        try{
          const rows = await db.run(`INSERT INTO orders
          ("orders_date", "orders_quantity", "orders_amount", "product_product_id", "client_name", "area")
          VALUES ('${date}',${quantity}, ${amount}, ${productID}, '${clientName}', '${area}')`);
          if(rows.stmt.changes>0)
            return rows.stmt.lastID;
          else
            return false;
        }catch(err){
          throw new Error("Error conection with database")
        } 
      }
      else
      throw new Error("quantity, amount and product_Id must be number")
      
    }
    return "Enter all necessary data!!";
  }
////////////*********READ*************////////////
  const getOrder = async (order) => {
    let query="select * from orders ";
    switch(order){
      case "area":
        query+="order by area";
        break;
      case "client":
        query+="order by client_name";
        break;
      case "product":
        query+="order by product_product_id";
        break;
      default:
        break;
    }
    try{
    const rows = await db.all(query);
    return rows
    }catch(err){
      throw new Error("Error connection with database")
    }
  }

  const getOrderId = async (id) => {
    id=parseInt(id);
    if(!isNaN(id)){
      try{
        const rows = await db.all(`select * from orders where orders_id=${id}`);
        if(rows.length>0)
          return rows;
        else
          return false;
        }catch(err){
          throw new Error("Error conection with database")
        }
    }
    else
    throw new Error("Enter id as a number");
   
  }

  const getOrderClientName = async (name) => {
    try{
    const rows = await db.all(`select * from orders where client_name='${name}'`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const getOrderProductId= async (id) => {
    id=parseInt(id);
    if(!isNaN(id)){
      try{
        const rows = await db.all(`select * from orders where product_product_id=${id}`);
        if(rows.length>0)
          return rows;
        else
          return false;
        }catch(err){
          throw new Error("Error conection with database")
        }
    }
    else
    throw new Error("Enter id as number");
   
  }

  const getOrderDate= async (date) => {
    try{
    const rows = await db.all(`select * from orders where orders_date='${date}'`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const getOrderArea= async (area) => {
    try{
    const rows = await db.all(`select * from orders where area='${area}'`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

////////////*********UPDATE*************////////////
  const updateOrder= async (id,props) => {console.log("zzsss");
    let {quantity,productID,clientName,area}=props;
    let query=" ";
    quantity=parseInt(quantity);
    productID=parseInt(productID);
    id=parseInt(id);
    if(!isNaN(id)){
              if(clientName && area && productID && quantity && !isNaN(productID) && !isNaN(quantity)){
                const result=await db.all(`select product_price from product where product_id=${productID}`);
                const amount=result[0].product_price*quantity;
                query=`update orders set product_product_id=${productID} ,orders_amount=${amount} ,orders_quantity=${quantity}, client_name='${clientName}' where orders_id=${id}`;
              }
               else if(quantity && productID && clientName && !area && !isNaN(productID) && !isNaN(quantity)){///
                const result=await db.all(`select product_price from product where product_id=${productID}`);
                const amount=result[0].product_price*quantity;
                query=`update orders set product_product_id=${productID} ,orders_amount=${amount} ,orders_quantity=${quantity} where orders_id=${id}`;
              }
              else if(quantity && productID && !clientName && !area && !isNaN(productID) && !isNaN(quantity)){
                const result=await db.all(`select product_price from product where product_id=${productID}`);
                const amount=result[0].product_price*quantity;
                query=`update orders set product_product_id=${productID} ,orders_amount=${amount} ,orders_quantity=${quantity} where orders_id=${id}`;
              }
              else if(quantity && productID && !clientName && area && !isNaN(productID) && !isNaN(quantity)){
                const result=await db.all(`select product_price from product where product_id=${productID}`);
                const amount=result[0].product_price*quantity;
                query=`update orders set product_product_id=${productID} ,orders_amount=${amount} ,orders_quantity=${quantity}, area='${area}' where orders_id=${id}`;
              }
              ///////////////////////////////
              else if(clientName && area && productID && !quantity && !isNaN(productID)){
                const result=await db.all(`select product_price from product where product_id=${productID}`);
                const prev_quantity=await db.all(`select orders_quantity from orders where orders_id=${id}`);
                const amount=result[0].product_price*prev_quantity[0].orders_quantity;
                query=`update orders set product_product_id=${productID} ,client_name='${clientName}' ,orders_amount=${amount}, area='${area}' where orders_id=${id}`;
              }
               else if(!quantity && productID && clientName && !area && !isNaN(productID) ){
                const result=await db.all(`select product_price from product where product_id=${productID}`);
                const prev_quantity=await db.all(`select orders_quantity from orders where orders_id=${id}`);
                const amount=result[0].product_price*prev_quantity[0].orders_quantity;
                query=`update orders set product_product_id=${productID} ,client_name='${clientName}' ,orders_amount=${amount} where orders_id=${id}`;
              }
              else if(!quantity && productID && !clientName && !area){
                const result=await db.all(`select product_price from product where product_id=${productID}`);
                const prev_quantity=await db.all(`select orders_quantity from orders where orders_id=${id}`);
                const amount=result[0].product_price*prev_quantity[0].orders_quantity;
                query=`update orders set product_product_id=${productID} ,orders_amount=${amount} where orders_id=${id}`;
              }
              else if(!quantity && productID && !clientName && area && !isNaN(productID)){
                const result=await db.all(`select product_price from product where product_id=${productID}`);
                const prev_quantity=await db.all(`select orders_quantity from orders where orders_id=${id}`);
                const amount=result[0].product_price*prev_quantity[0].orders_quantity;
                query=`update orders set product_product_id=${productID} ,orders_amount=${amount} ,area='${area}' where orders_id=${id}`;
              }
              ///////////////////////////////
              if(clientName && area && !productID && quantity && !isNaN(quantity)){
                const product_id=await db.all(`select product_product_id from orders where orders_id=${id}`);
                const result=await db.all(`select product_price from product where product_id=${product_id[0].product_product_id}`);
                const amount=result[0].product_price*quantity;
                query=`update orders set orders_quantity=${quantity} ,client_name='${clientName}' ,orders_amount=${amount}, area='${area}' where orders_id=${id}`;
              }
               else if(quantity && !productID && clientName && !area && !isNaN(quantity)){
                const product_id=await db.all(`select product_product_id from orders where orders_id=${id}`);
                const result=await db.all(`select product_price from product where product_id=${product_id[0].product_product_id}`);
                const amount=result[0].product_price*quantity;
                query=`update orders set orders_quantity=${quantity} ,client_name='${clientName}' ,orders_amount=${amount} where orders_id=${id}`;console.log(query);console.log(typeof(quantity))
              }
              else if(quantity && !productID && !clientName && !area && !isNaN(quantity)){
                const product_id=await db.all(`select product_product_id from orders where orders_id=${id}`);
                const result=await db.all(`select product_price from product where product_id=${product_id[0].product_product_id}`);
                const amount=result[0].product_price*quantity;
                query=`update orders set orders_quantity=${quantity} ,orders_amount=${amount} where orders_id=${id}`;
              }
              else if(quantity && !productID && !clientName && area  && !isNaN(quantity)){
                const product_id=await db.all(`select product_product_id from orders where orders_id=${id}`);
                const result=await db.all(`select product_price from product where product_id=${product_id[0].product_product_id}`);
                const amount=result[0].product_price*quantity;
                query=`update orders set orders_quantity=${quantity} ,orders_amount=${amount}, area='${area}' where orders_id=${id}`;
              }
              ///////////////////////////////
              else if(clientName && area && !productID && !quantity){
                query=`update orders set client_name='${clientName}' , area='${area}' where orders_id=${id}`;
              }
               else if(!quantity && !productID && clientName && !area ){
                query=`update orders set client_name='${clientName}' where orders_id=${id}`;
              }
              else if(!quantity && !productID && !clientName && area){
                query=`update orders set area='${area}' where orders_id=${id}`;
              }
              //////////////////////////////
        try{
            const rows = await db.run(query);
            if(rows.stmt.changes>0)
              return true;
            else
              return false;
            }catch(err){
              throw new Error("Error conection with database")
            } 
          }
          else
          throw new Error("enter id as number");
    }
////////////*********DELETE*************////////////
  const deleteOrderId= async (id) => {
    id=parseInt(id);
    if(!isNaN(id)){
      try{
        const rows = await db.run(`delete from orders where orders_id=${id}`);
        if(rows.stmt.changes>0)
          return true;
        else
          return false;
        }catch(err){
          throw new Error("Error conection with database")
        }
    }
    else
    throw new Error("enter id as number");
  
  }

  const deleteOrderClientName= async (name) => {
    try{
    const rows = await db.run(`delete from orders where client_name='${name}'`);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

////////////*********CATEGORY*************////////////

////////////*********CREATE*************////////////
  const createCategory = async (props) =>{
    const {name}=props;
    if(name){
        try{
          const rows = await db.run (`insert into category (category_name) values ('${name}')`);
          return rows.stmt.lastID;
        }catch(err){
          throw new Error("no connection to database");
        }
    }
    else
    throw new Error("enter name");

  }
////////////*********READ*************////////////
  const getcategory = async (orderby) => {
      let query="select * from category";
      switch(orderby){
        case "name":
          query+=" order by category_name";
          break;
        default:break;
      }
      try {
        const rows = await db.all(query);
        if (rows.length == 0) {
          throw new Error("Category is empty!");
        }
        return rows;
      } catch (err) {
        throw new Error("Could not retrieve list of category");
      } 
    };

  const getcategoryById = async (id) => {
    id=parseInt(id);
    if(!isNaN(id)){
      try{
        const rows = await db.all(`select * from category where category_id =${id} `);
        if(rows.length>0){
        return rows;
        }
        else{
          throw new Error(`Category with id=${id} is not found`)
        }
        }catch(err){
          throw new Error(`Can't retreive data`)
        }
      }
    else{
      throw new Error(`Enter id as a number`)
    }
  
  };

  const getcategoryByName = async(name) =>{
    try{
    const rows =  await db.all(`select * from category where category_name = '${name}'`);
    if(rows.length>0){
      return rows;
    }
    else{
      throw new Error(`Category with name=${name} is not found`)
    }
    }catch(err){
      throw new Error(`Can't retrieve data`)
    }
  }
  ////////////*********UPDATE*************////////////
  const updateCategory = async (id,props) =>{
    const {name}=props;
    let query="";
    id=parseInt(id);
    if(name && !isNaN(id)){
      query=`update category set category_name='${name}' where category_id=${id}`;
    }
    else
      throw new Error("enter name in order to update")
     try{
    const rows = await db.run(query);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("no connection to database");
    } 
  }

////////////*********DELETE*************////////////
  const deleteCategoryByID = async(id) =>{
    id=parseInt(id);
    if(!isNaN(id)){
      try{ 
        const rows = await db.run(`delete from category where category_id=${id}`);
        if(rows.stmt.changes>0){
          return true;
         }
         else 
         return false;
       }catch(err){
         throw new Error("not found")
      }
    }
    else{
      throw new Error("Enter id as a number");
    }
   
  }

  const deleteCategoryByName = async (name) =>{
    try{
      const rows = await db.run (`delete from category where category_name='${name}'`);
      if(rows.stmt.changes>0){
        return true;
      }
      else 
      return false;}
      catch{
      throw new Error("not found");}
    }

////////////*********IMAGE*************////////////

////////////*********CREATE*************////////////
  const createImage = async (props) =>{
    let {name,productID}=props;
    productID=parseInt(productID);
    if(name && productID && !isNaN(productID)){
        try{
          const id = await db.all (`select * from product where product_id=${productID}`);
          if(id.length>0){
            try{
            const rows = await db.run (`insert into image (image_name,product_product_id) values ('${name}',${productID})`);
            return rows.stmt.lastID;
          }catch{
            throw new Error("can't insert into Image table");
          }
        }
          else{
            throw new Error("Product_id is not found");
          }
  }catch{
    throw new Error("can't connect to database");
  }
  }
  };
////////////*********READ*************////////////
  const getimage = async (orderby) => {
    let query="select * from image";
     switch(orderby){
      case "product":
        query+=" order by product_product_id";
        break;
      default:break;
    }
    try {
      const rows = await db.all(query);
      if (rows.length == 0) {
        throw new Error("Image is empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of image");
    } 
  };
      
  const getimageById = async (id) => {
  id=parseInt(id);
  if(!isNaN(id)){
    try{
      const rows = await db.all(`select * from image where image_id =${id} `);
      if(rows.length>0){
      return rows;
      }
      else if(rows.length==0){
        throw new Error(`Image with id=${id} is not found`)
      }
      }catch(err){
        throw new Error(`Can't retreive data`)
      }
    }
  else{
    throw new Error(`Enter id as a number`)
  }
  
};
    
  const getimageByProductId = async(id) =>{
    try{
    const rows =  await db.all(`select * from image where product_product_id = ${id}`);
    if(rows.length>0){
      return rows;
    }
    else{
      throw new Error(`Image with Product_id=${id} is not found`)
    }
    }catch(err){
      throw new Error(`Can't retrieve data`)
    }
  };
////////////*********UPDATE*************////////////
const updateImage = async (id,props) =>{
  let {name,productID}=props;
  let query="";
  productID=parseInt(productID);
  id=parseInt(id);
  if(!isNaN(id)){
    if(name && productID && !isNaN(productID)){
      query=`update image set image_name='${name}' , product_product_id=${productID} where image_id=${id}`;
    }
    else if(!name && productID && !isNaN(productID)){
      query=`update image set product_product_id=${productID} where image_id=${id}`;
    }
    else{
      query=`update image set image_name='${name}' where image_id=${id}`;
    }
  }
    else
      throw new Error("enter id as number")
      try{
    const rows = await db.run(query);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("no connection to database");
    }
    };
////////////*********DELETE*************////////////
  const deleteImageByID = async(id) =>{
    id=parseInt(id);
    if(!isNaN(id)){
      try{ 
        const rows = await db.run(`delete from image where image_id=${id}`);
        if(rows.stmt.changes>0){
          return true;
          }
          else 
          return false;
        }catch(err){
          throw new Error("not found")
      }
    }
    else{
      throw new Error("Enter id as a number");
    }
    
  };
  
  const deleteImageByName = async (name) =>{
    try{
      const rows = await db.run (`delete from image where image_name='${name}'`);
      if(rows.stmt.changes>0){
        return true;
      }
      else 
      return false;}
      catch{
      throw new Error("not found");}
    }

  const deleteImageByProduct = async (id) =>{
    try{
      const rows = await db.run (`delete from image where product_product_id=${id}`);
      if(rows.stmt.changes>0){
        return true;
      }
      else 
      return false;}
      catch{
      throw new Error("not found");}
    };
////////////*********PRODUCT*************////////////
////////////*********CREATE*************////////////
  const createProduct = async (props) =>{
    let {name,description,price,quantity,date,categoryID,collectionID}=props;
    price=parseInt(price);
    quantity=parseInt(quantity);
    categoryID=parseInt(categoryID);
    collectionID=parseInt(collectionID);////
    if(name && description && price && quantity && date && categoryID && collectionID && !isNaN(price) && !isNaN(quantity) && !isNaN(collectionID) && !isNaN(categoryID)){
        try{
          const collValue = await db.all (`select * from collection where collection_id=${collectionID}`);
          const catValue = await db.all (`select * from category where category_id=${categoryID}`);
          if(collValue.length>0 && catValue.length>0){
            try{
            const rows = await db.run (`insert into product (product_name,product_description,product_price,product_quantity,product_date,category_category_id,collection_collection_id) values ('${name}','${description}',${price},${quantity},'${date}',${categoryID},${collectionID})`);
            return rows.stmt.lastID;
          }catch{
            throw new Error("can't insert into Image table");
          }
        }
          else{
            throw new Error("Product_id is not found");
          }
    }catch{
    throw new Error("can't connect to database");
    }
    }
    }
////////////*********READ*************////////////
  const getproduct = async (orderby) => {
    let query="select * from product";
     switch(orderby){
      case "product":
        query+=" order by product_name";
        break;
      case "category":
        query+=" order by category_category_id";
        break;
      case "collection":
        query+=" order by collection_collection_id";
        break;
      default:break;
    }
    try {
      const rows = await db.all(query);
      if (rows.length == 0) {
        throw new Error("product is empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of product");
    } 
  };
  const getproductById = async (id) => {
  id=parseInt(id);
  if(!isNaN(id)){
    try{
      const rows = await db.all(`select * from product where product_id =${id} `);
      if(rows.length>0){
      return rows;
      }
      else if(rows.length==0){
        throw new Error(`Product with id=${id} is not found`)
      }
      }catch(err){
        throw new Error(`Can't retreive data`)
      }
    }
  else{
    throw new Error(`Enter id as a number`)
  }
  
};
  const getproductByName = async(id) =>{
      try{
      const rows =  await db.all(`select * from product where product_name = '${id}'`);
      if(rows.length>0){
        return rows;
      }
      else{
        throw new Error(`Product with Product_id=${id} is not found`)
      }
      }catch(err){
        throw new Error(`Can't retrieve data`)
      }
    }
  const getproductByCategory = async (id) => {
    id=parseInt(id);
    if(!isNaN(id)){
      try{
        const rows = await db.all(`select * from product where category_category_id =${id} `);
        if(rows.length>0){
        return rows;
        }
        else if(rows.length==0){
          throw new Error(`Product with id=${id} is not found`)
        }
        }catch(err){
          throw new Error(`Can't retreive data`)
        }
      }
    else{
      throw new Error(`Enter id as a number`)
    }
    
  };
  const getproductByCollection = async (id) => {
    id=parseInt(id);
    if(!isNaN(id)){
      try{
        const rows = await db.all(`select * from product where collection_collection_id =${id} `);
        if(rows.length>0){
        return rows;
        }
        else if(rows.length==0){
          throw new Error(`Product with id=${id} is not found`)
        }
        }catch(err){
          throw new Error(`Can't retreive data`)
        }
      }
    else{
      throw new Error(`Enter id as a number`)
    }
   
  };
////////////*********UPDATE*************////////////

/*
    const updateImage = async (id,props) =>{
      let {name,productID}=props;
      let query="";
      productID=parseInt(productID);
      id=parseInt(id);
      if(!isNaN(id)){
        if(name && productID && !isNaN(productID)){
          query=`update image set image_name='${name}' , product_product_id=${productID} where image_id=${id}`;
        }
        else if(!name && productID && !isNaN(productID)){
          query=`update image set product_product_id=${productID} where image_id=${id}`;
        }
        else{
          query=`update image set image_name='${name}' where image_id=${id}`;
        }
      }
      else
        throw new Error("enter id as number")
       try{
      const rows = await db.run(query);
      if(rows.stmt.changes>0)
        return true;
      else
        return false;
      }catch(err){
        throw new Error("no connection to database");
      } 
    }  */

////////////*********DELETE*************////////////
  const deleteProductByID = async(id) =>{
    id=parseInt(id);
    if(!isNaN(id)){
      try{ 
        const rows = await db.run(`delete from product where product_id=${id}`);
        if(rows.stmt.changes>0){
          return true;
         }
         else 
         return false;
       }catch(err){
         throw new Error("not found")
      }
    }
    else{
      throw new Error("Enter id as a number");
    }
   
  }

  const deleteProductByName = async (name) =>{
    try{
      const rows = await db.run (`delete from product where product_name='${name}'`);
      if(rows.stmt.changes>0){
        return true;
      }
      else 
      return false;}
      catch{
      throw new Error("not found");}
    }
  const deleteProductByCollection = async (name) =>{
    try{
      const rows = await db.run (`delete from product where category_category_id=${name}`);
      if(rows.stmt.changes>0){
        return true;
      }
      else 
      return false;}
      catch{
      throw new Error("not found");}
    }
  const deleteProductByCategory = async (name) =>{
    try{
      const rows = await db.run (`delete from product where category_category_id=${name}`);
      if(rows.stmt.changes>0){
        return true;
      }
      else 
      return false;}
      catch{
      throw new Error("not found");}
    }

    //////*********JOIN Collection vs Category*********//////
    const categoryCollections = async (props) => {
      let {cat,coll}=props;
      cat=parseInt(cat);
      coll=parseInt(coll);
      if(!isNaN(coll) && !isNaN(cat)){
      let query=`select * from product  where category_category_id=${cat} and collection_collection_id=${coll}`;
      try {
        const rows = await db.all(query);
        if (rows.length > 0) {
          return rows;
        }
        throw new Error("product is empty!");
      } catch (err) {
        throw new Error("Could not retrieve list of product");
      } 
    }
    };


  const controller = {
    /*COLLECTION*/
    /*CREATE*/
    createCollection,
    /*READ*/
    getcollection,
    getcollectionById,
    getcollectionByName,
    getcollectionByFlag,
    /*UPDATE*/
    updateCollection,
    /*DELETE*/
    deleteCollectionByID,
    deleteCollectionByName,

    /*ADMIN*/
    /*CREATE*/
    createAdmin,
    /*READ*/
    getAdmin,
    getAdminId,
    getAdminName,
    /*UPDATE*/
    updateAdmin,
    updateAdmin,
    /*DELETE*/
    deleteAdminId,
    deleteAdminName,
    
    /*ORDER*/
    /*CREATE*/
    createOrder,
    /*READ*/
    getOrder,
    getOrderId,
    getOrderClientName,
    getOrderProductId,
    getOrderArea,
    getOrderDate,
    /*UPDATE*/
    updateOrder,
    /*DELETE*/
    deleteOrderId,
    deleteOrderClientName,
    
    /*CATEGORY*/
    /*CREATE*/
    createCategory,
    /*READ*/
    getcategory,
    getcategoryById,
    getcategoryByName,
    /*UPDATE*/
    updateCategory,
    /*DELETE*/
    deleteCategoryByID,
    deleteCategoryByName,

    /*IMAGE*/
    /*CREATE*/
    createImage,
    /*READ*/ /*IN THIS CONTROLLER THE I IN IMAGE IS SMALL LETTER*/
    getimage,
    getimageById,
    getimageByProductId,
    /*UPDATE*/
    updateImage,
    /*DELETE*/
    deleteImageByID,
    deleteImageByName,
    deleteImageByProduct,

    /*PRODUCT*/
    /*CREATE*/
    createProduct,
    /*READ*/ /*IN THIS CONTROLLER THE P IN PRODUCT IS SMALL LETTER*/
    getproduct,
    getproductById,
    getproductByName,
    getproductByCategory,
    getproductByCollection,
    /*UPDATE*/
    /*THERE IS A MISSING CONTROLLER*/
    /*DELETE*/
    deleteProductByID,
    deleteProductByName,
    deleteProductByCategory,
    deleteProductByCollection,
    /*Join collection vs category*/
    categoryCollections

  }
  return controller;
};

export default initializeDB ;
