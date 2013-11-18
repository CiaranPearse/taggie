var tags = [];

$(function() {
    
    $('.tagEntry').blur(function(){
        var tVal = $(this).val().trim();
        if(tVal == '')
            return;
        
        for(var i=0;i<tags.length;i++)
            if(tags[i] == tVal)
                return;
        
        tags.push(tVal);
        
        $('#tagsEntered').val(tags.join(', '));
        
    });
    
});
