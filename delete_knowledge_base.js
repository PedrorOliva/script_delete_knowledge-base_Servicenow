var kbase = new GlideRecord('kb_knowledge_base');  
kbase.addQuery('sys_id', 'coloque o sys_id da base aqui');   // clique com o botão direito em cima do nome da base e copie o sys_id
kbase.query();   
while (kbase.next()) {  
    kbase.deleteRecord();  
} 