Ext.onReady(function() {
	
	var Store = Ext.create('Ext.data.Store', {
		autoLoad: true,
		autoSync: false,
		fields: [{name: 'id', type: 'int'},
				{name: 'name', type: 'string'},
				{name: 'describes', type: 'string'},
				{name: 'price', type: 'float'},
				{name: 'quantity', type: 'int'}],
		data: [{
			id: 1,
			name: 'Ноутбук Lenovo',
			describes: 'Ноутбук ThinkPad T460 14"FHD(1920x1080),i5-6200U(2,3GHz),4Gb,500GB@5400+8Gb cache, HD Graphics 520, WiFi,BT,TPM,FPR,WWAN ready,3cell+3cell,Cam,Win7 Pro 64 + Win10 Pro upgrade coupon,1,7kg, 3y OS',
			price: 100,
			quantity: 2
		}, {
			id: 2,
			name: 'Клавиатура OKLICK',
			describes: 'Клавиатура OKLICK 140M,  USB, черный',
			price: 50,
			quantity: 8
		}, {
			id: 3,
			name: 'Сетевой адаптер',
			describes: 'Сетевой адаптер WiFi D-Link DWA-582 DWA-582/RU',
			price: 7,
			quantity: 0
		}]
	});
	
	
	
	
	
	
	var prdPanel = Ext.create('Ext.window.Window', {
		title: 'Карточка товара',  
        width: 350 ,
		height: 300,
		layout: 'anchor',
		closeAction: 'hide',
		padding: 5,
		renderTo: Ext.getBody(),
		items: [{
				xtype: 'textfield',
                fieldLabel: 'ID',
				padding: 5,
				dataIndex: 'id',
				name: 'id',
				disabled: true
		
                }, {
				xtype: 'textfield',
                fieldLabel: 'Имя',
                name: 'name',
				padding: 5,
				dataIndex: 'name',
				disabled: true
                }, {
				xtype: 'textfield',
                fieldLabel: 'Цена',
                name: 'price',
				padding: 5,
				maskRe:/[0-9]/i
				
                }, {
				xtype: 'textfield',
                fieldLabel: 'Кол-во',
                name: 'quantity',
				padding: 5,
				maskRe:/[0-9]/i
                }],
		buttons: [{             //Кнопки
				xtype: 'button',
				text: 'Сохранить',
				action: 'save',
				handler: function() { 
					var id = prdPanel.query('textfield[name="id"]')[0].getValue(); 
					var name = prdPanel.query('textfield[name="name"]')[0].getValue(); 
					var price = prdPanel.query('textfield[name="price"]')[0].getValue(); 
					var quantity = prdPanel.query('textfield[name="quantity"]')[0].getValue(); 
					var item = Store.getById(id); 
					 
					item.data.price = price; 
					item.data.quantity = quantity;
					
					alert("Имеются измененные данные!!!")
					
					Store.reload();
					
					prdPanel.hide();
                    },                
				}, {
				xtype: 'button',
				text: 'Отмена',
				handler: function() {
					prdPanel.hide();
				}
			}],
	}).hide();
	
	var winPanel = Ext.create('Ext.window.Window', {
		title: 'Авторизация',
        width: 300,
        height:200,
		layout: 'anchor',
		padding: 5,
		renderTo: Ext.getBody(),
		items: [{ 
			xtype: 'textfield',
            fieldLabel: 'Логин',
            name: 'login',
			emptyText: 'введите логин',
            labelAlign: 'top',
            cls: 'field-margin',
            flex: 1
				}, {
            xtype: 'textfield',
			inputType: 'password',
            fieldLabel: 'Пароль',
            name: 'password',
			emptyText: 'введите пароль',
            labelAlign: 'top',
            cls: 'field-margin',
            flex: 1
            }],
			buttons: [{
            text: 'Оправить',
            handler: function() {
				var login = winPanel.items.get(0);
				var passw = winPanel.items.get(1);
				
				if ( login.getValue() == 'admin' && passw.getValue() == 'padmin') {
					tabpanel.show();
					a.show();
					winPanel.hide();		
				} else {
					alert('неверные данные!!');
				}
            }
			}],
	}).show();
	
	
	
	
	
	var a = Ext.create('Ext.form.Panel', {
			title: 'Главное окно',  //Главное окно
			width: '100%' ,
			height:35,
			cls: 'window',
			layout: 'anchor',
			renderTo: Ext.getBody(),
	}).hide();
	var tabpanel = Ext.create('Ext.tab.Panel', {
			items : [
				{           //Вкладка 1 	
				title : 'Товары 1',
				cls: '.tab',
				id: 'tab1',
				items: [{        //Таблица
					xtype: "grid",
					height: 300,
					width: '100%',
					title: 'Товары 1',
					listeners:{
						cellclick: function(iView, iCellEl, iColIndex, iStore, iRowEl, iRowIndex, iEvent) {
							if (iColIndex === 1) {
								prdPanel.query('textfield[name="id"]')[0].setValue(iStore.data.id);
								prdPanel.query('textfield[name="name"]')[0].setValue(iStore.data.name);
								prdPanel.query('textfield[name="price"]')[0].setValue(iStore.data.price);
								prdPanel.query('textfield[name="quantity"]')[0].setValue(iStore.data.quantity);
								prdPanel.show();
							}
						}
					},						
					store: Store,
					plugins: [{
						ptype: 'gridfilters'
					}],
					
					dockedItems: [{  
						items: [{              //Фильт по ИД
							xtype: 'textfield',
							fieldLabel: 'ID',
							margin: 3,
							name: 'searchstring',
							emptyText: 'Фильтр по id', //Type: J
							enableKeyEvents: true,
							listeners: {
								keyup: function(form, e) {
									var grid = form.up('grid');
									
									grid.getStore().addFilter({
										property: 'id',
										value: form.getValue()
									});
												
									}
								}
							}, {
							xtype: 'textfield',     //Фильтр по описанию
							fieldLabel: 'Описание',
							margin: 3,
							name: 'searchstring',
							emptyText: 'Фильтр по описанию',
							enableKeyEvents: true,
							listeners: {
								keyup: function(form, e) {
									var grid = form.up('grid');
									
									grid.getStore().addFilter({
										property: 'describes',
										value: form.getValue()
									});
															
									}
								}
							}]
					}, {
						xtype: 'pagingtoolbar', //Нижний тулбар
						store:Store,
						dock: 'bottom',
						//displayInfo: true,
						beforePageText: 'Страница',
						afterPageText: 'из {0}',
						//displayMsg: 'Товары {0} - {1} из {2}'
					}],
					
					columns: [
					{
						text     : 'ID',
						dataIndex: 'id',
						width: '5%'
										
					}, {
						text     : 'Имя',
						dataIndex: 'name',
						type: 'string',
						xtype:'templatecolumn',
						width: '15%',
						tpl:'<a href="#"">{name}</a>'		
					}, {
						text     : 'Описание',
						dataIndex: 'describes',
						type: 'string',
						width: '60%'
					}, {
						text     : 'Цена',
						dataIndex: 'price',
						format: '0.00',
						xtype: 'numbercolumn',
						width: '10%'
					}, {
						text     : 'Количество',
						dataIndex: 'quantity',
						type: 'int',
						width: '10%',
						renderer: function(v,m){
							var background = v ? 'white' : 'red';
							
							m.style='background-color:'+background;
							return v;
						}
					}
					],
					
					
					}],
				},{
				title : 'Товары 2',
				cls: 'tab',
				id: 'tab2',
				items: [{        //Таблица
					xtype: "grid",
					height: 300,
					width: '100%',
					title: 'Товары 2',
											
					store: Store,
					plugins: [{
						ptype: 'gridfilters'
					}],
					
					dockedItems: [{  
						items: [{              //Фильт по ИД
							xtype: 'textfield',
							fieldLabel: 'ID',
							margin: 3,
							name: 'searchstring',
							emptyText: 'Фильтр по id', //Type: J
							enableKeyEvents: true,
							listeners: {
								keyup: function(form, e) {
									var grid = form.up('grid');
									
									grid.getStore().addFilter({
										property: 'id',
										value: form.getValue()
									});
												
									}
								}
							}, {
							xtype: 'textfield',     //Фильтр по описанию
							fieldLabel: 'Описание',
							margin: 3,
							name: 'searchstring',
							emptyText: 'Фильтр по описанию',
							enableKeyEvents: true,
							listeners: {
								keyup: function(form, e) {
									var grid = form.up('grid');
									
									grid.getStore().addFilter({
										property: 'describes',
										value: form.getValue()
									});
															
									}
								}
							}]
					}, {
						xtype: 'pagingtoolbar', //Нижний тулбар
						store:Store,
						dock: 'bottom',
						//displayInfo: true,
						beforePageText: 'Страница',
						afterPageText: 'из {0}',
						//displayMsg: 'Товары {0} - {1} из {2}'
					}],
					
					columns: [
					{
						text     : 'ID',
						dataIndex: 'id',
						width: '5%'
										
					}, {
						text     : 'Имя',
						dataIndex: 'name',
						type: 'string',
						xtype:'templatecolumn',
						width: '15%',
						tpl:'<a href="#"">{name}</a>',
						listeners: {
							click: function(){
								prdPanel.show();
							}
						}		
						
					}, {
						text     : 'Описание',
						dataIndex: 'describes',
						type: 'string',
						width: '60%'
					}, {
						text     : 'Цена',
						dataIndex: 'price',
						format: '0.00',
						xtype: 'numbercolumn',
						width: '10%'
					}, {
						text     : 'Количество',
						dataIndex: 'quantity',
						type: 'int',
						width: '10%',
						renderer: function(v,m){
							var background = v ? 'white' : 'red';
							
							m.style='background-color:'+background;
							return v;
						}
					}
					],
					
					
					}],
				}, {
				title : 'Товары 3',
				cls: 'tab',
				id: 'tab3',
				items: [{        //Таблица 3
					xtype: "grid",
					height: 300,
					width: '100%',
					title: 'Товары 3',
											
					store: Store,
					plugins: [{
						ptype: 'gridfilters'
					}],
					
					dockedItems: [{  
						items: [{              //Фильт по ИД
							xtype: 'textfield',
							fieldLabel: 'ID',
							margin: 3,
							name: 'searchstring',
							emptyText: 'Фильтр по id', //Type: J
							enableKeyEvents: true,
							listeners: {
								keyup: function(form, e) {
									var grid = form.up('grid');
									
									grid.getStore().addFilter({
										property: 'id',
										value: form.getValue()
									});
									
									}
								}
							}, {
							xtype: 'textfield',     //Фильтр по описанию
							fieldLabel: 'Описание',
							margin: 3,
							name: 'searchstring',
							emptyText: 'Фильтр по описанию',
							//flex: 1,
							enableKeyEvents: true,
							listeners: {
								keyup: function(form, e) {
									var grid = form.up('grid');
									
									grid.getStore().addFilter({
										property: 'describes',
										value: form.getValue()
									});
															
									}
								}
							}]
					}, {
						xtype: 'pagingtoolbar', //Нижний тулбар
						store:Store,
						dock: 'bottom',
						//displayInfo: true,
						beforePageText: 'Страница',
						afterPageText: 'из {0}',
						//displayMsg: 'Товары {0} - {1} из {2}'
					}],
					
					columns: [
					{
						text     : 'ID',
						dataIndex: 'id',
						width: '5%'
										
					}, {
						text     : 'Имя',
						dataIndex: 'name',
						type: 'string',
						xtype:'templatecolumn',
						width: '15%',
						tpl:'<a href="#"">{name}</a>',
						listeners: {
							click: function(){
								prdPanel.show();
							}
						}		
					}, {
						text     : 'Описание',
						dataIndex: 'describes',
						type: 'string',
						width: '60%'
					}, {
						text     : 'Цена',
						dataIndex: 'price',
						format: '0.00',
						xtype: 'numbercolumn',
						width: '10%'
					}, {
						text     : 'Количество',
						dataIndex: 'quantity',
						type: 'int',
						width: '10%',
						renderer: function(v,m){
							var background = v ? 'white' : 'red';
							
							m.style='background-color:'+background;
							return v;
						}
					}
					],
					
					
					}],
				}],
			
			buttons: [{             //Кнопки
				xtype: 'button',
				text: 'Товары',
				handler: function() { 
					 var tab = tabpanel.add({
						title: 'Товары ' + (tabpanel.items.length + 1),
						//html : 'Товары ' + (tabpanel.items.length + 1),
						items: [{        //Таблица 
						xtype: "grid",
						height: 300,
						width: '100%',
						title: 'Товары ',
						listeners:{
						cellclick: function(iView, iCellEl, iColIndex, iStore, iRowEl, iRowIndex, iEvent) {
							if (iColIndex === 1) {
								prdPanel.query('textfield[name="id"]')[0].setValue(iStore.data.id);
								prdPanel.query('textfield[name="name"]')[0].setValue(iStore.data.name);
								prdPanel.query('textfield[name="price"]')[0].setValue(iStore.data.price);
								prdPanel.query('textfield[name="quantity"]')[0].setValue(iStore.data.quantity);
								prdPanel.show();
								}
							}
						},						
						store: Store,
						plugins: [{
							ptype: 'gridfilters'
						}],
						dockedItems: [{  
							items: [{              //Фильт по ИД
								xtype: 'textfield',
								fieldLabel: 'ID',
								margin: 3,
								name: 'searchstring',
								emptyText: 'Фильтр по id', //Type: J
								enableKeyEvents: true,
								listeners: {
									keyup: function(form, e) {
										var grid = form.up('grid');
										
										grid.getStore().addFilter({
											property: 'id',
											value: form.getValue()
										});
										
										}
									}
								}, {
								xtype: 'textfield',     //Фильтр по описанию
								fieldLabel: 'Описание',
								margin: 3,
								name: 'searchstring',
								emptyText: 'Фильтр по описанию',
								//flex: 1,
								enableKeyEvents: true,
								listeners: {
									keyup: function(form, e) {
										var grid = form.up('grid');
										
										grid.getStore().addFilter({
											property: 'describes',
											value: form.getValue()
										});
																
										}
									}
								}]
					}, {
						xtype: 'pagingtoolbar', //Нижний тулбар
						store:Store,
						dock: 'bottom',
						//displayInfo: true,
						beforePageText: 'Страница',
						afterPageText: 'из {0}',
						//displayMsg: 'Товары {0} - {1} из {2}'
					}],
					columns: [
					{
						text     : 'ID',
						dataIndex: 'id',
						width: '5%'
										
					}, {
						text     : 'Имя',
						dataIndex: 'name',
						type: 'string',
						xtype:'templatecolumn',
						width: '15%',
						tpl:'<a href="#"">{name}</a>',
						listeners: {
							click: function(){
								prdPanel.show();
							}
						}		
					}, {
						text     : 'Описание',
						dataIndex: 'describes',
						type: 'string',
						width: '60%'
					}, {
						text     : 'Цена',
						dataIndex: 'price',
						format: '0.00',
						xtype: 'numbercolumn',
						width: '10%'
					}, {
						text     : 'Количество',
						dataIndex: 'quantity',
						type: 'int',
						width: '10%',
						renderer: function(v,m){
							var background = v ? 'white' : 'red';
							
							m.style='background-color:'+background;
							return v;
						}
					}
					]
						}]
					});
					tabpanel.setActiveTab(tab);
        
				
                    },                
				}, {
				xtype: 'button',
				text: 'Выход',
				handler: function() {
					var login = winPanel.items.get(0);
					var passw = winPanel.items.get(1);
					tabpanel.hide();
					a.hide();
					login.setValue() == '';
					passw.setValue() == '';
					winPanel.show();
				}
			}],
		renderTo: Ext.getBody(),	
	});
	tabpanel.hide();
});
		
	