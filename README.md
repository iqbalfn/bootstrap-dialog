# bootstrap-dialog

Bootstrap 4 dialog plugin using build-in modal component.

```
$.dialog.alert('title', 'message', callback);
$.dialog.confirm('title', 'message', callback(true|false));
$.dialog.prompt('title', 'message', {input}, callback(val|null));

{input} => {
    type: 'textarea|select|text|number|url|...',
    options: { value: label, ... },
    value: 'preset value',
    label: 'Form Control Label',

    render: function(self): string{}
    val: function() mixed{}
}
```