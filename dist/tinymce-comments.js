
var html="";
var id_index = 0;

tinymce.initComment = () =>{

  tinymce.init({
    menubar: false,
  
  selector: 'textarea.contant#contant',
  toolbar: 'customInsertButton customDateButton',
  setup: function (editor) {
  
    editor.ui.registry.addButton('customInsertButton', {
      text: 'Comment',
      onAction: function (_) 
      {
  
        tinymce.EditorManager.get('contant').focus();
  
        if(tinymce.activeEditor.selection.getContent().search('class="editable"')!= -1)
          {
            alert('This type of comment is not permitted !');
            return;
          }
  
        var value = prompt('Leave a comment:');
        var isExist = 0 ;
     
          try {
  
              dom_doc = $(tinymce.activeEditor.selection.getContent());
              for(i=0;i<dom_doc.length;i++)
              {
                if(dom_doc[i].tagName == null)
                {
  
                }
              else
              {
                tag_parse = dom_doc[i].tagName.split("");
                if(tag_parse[0] == 'H' || tag_parse[0] == 'P' || dom_doc[i].tagName == 'DIV')
                {
                  isExist =1;
                  break;
                }
              }
  
            }
          } catch (error) {
            
          }
       
  
        if(value != null && isExist == 0)
        {
          //editor.insertContent('<span  class="editable" id="comment" lang="'+value+'">'+tinymce.activeEditor.selection.getContent()+'</span>');
  
  
        var el = tinymce.activeEditor.dom.create('span', {id: 'editable-'+id_index, 'class': 'editable','lang':value},String(tinymce.activeEditor.selection.getContent())  );
        tinymce.activeEditor.selection.setNode(el);
        id_index+=1;
        
        }
        else
        {
          if(isExist == 1)
          {
            alert('This type of comments are not permitted !');
          }
          return;
        }
        $("iframe").contents().find("body").attr("contenteditable","false");
   
      }
    });
  
  },
  init_instance_callback: function (editor) {
    editor.on('click', function (e) {
      tinymce.EditorManager.get('contant').focus();
  
  
  
    try {
      if(e.target.className == 'editable')
      {
        if(e.target.tagName =='SPAN' && e.target.className =="editable" &&  e.target.className != null)
        {
          if(confirm('Current comment:  '+e.target.lang+'\n'+'Do you want to delete it ?'))
          {
            e.target.outerHTML = e.target.innerHTML;
          }

      
        }
      }
    } catch (error) 
    {
      continue;
    }
    $("iframe").contents().find("body").attr("contenteditable","false");
  });
  },
  content_style: '.comments{  display:none;}.editable{background-color:yellow;opacity:0.6}.editable:hover{background-color:red;opacity:0.6} em{z-index:-1;}b{z-index:-1;}sup{z-index:-1;}sub{z-index:-1;}'
  });
}
