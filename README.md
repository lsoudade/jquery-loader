jquery-loader
=============

jQuery plugin

## Description :

Puts a layer on an element, for example on an ajax form after having submit it

## Usage :

```
<form action="my-url">
    <label for="firstname">Firstname :</label>
    <input type="text" id="firstname" /> 

    <label for="age">Age :</label>
    <input type="text" id="age" /> 
</form>

<script type="text/javascript">
    $(function() {
        $('form').submit(function(e) {
            e.preventDefault();
            $.ajax({
                context: this,
                url: $(this).attr('action'),
                type: 'POST',
                data: $(this).serialize(),
                beforeSend: function( xhr ) {
                    $(this).loader({
                        // bgColor: '#F6F6F6', 
                        // opacity: '0.5', 
                        classname: 'my-form-custom-id', 
                        icon: '//my-domain.com/img/loader.gif'
                    });
                }
            }).done(function(data){
                $('#my-form-custom-id').remove();
                $(this).html(data);
            });
        });
    });
</script>
