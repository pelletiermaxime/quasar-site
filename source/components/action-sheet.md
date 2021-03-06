title: Quasar Action Sheet
---
Action Sheets slide up from the bottom edge of the device screen, and display a set of options with the ability to confirm or cancel an action. Action Sheets can sometimes be used as an alternative to menus, however, they should not be used for navigation.

The Action Sheet always appears above any other components on the page, and must be dismissed in order to interact with the underlying content. When it is triggered, the rest of the page darkens to give more focus to the Action Sheet options.

<input type="hidden" data-fullpage-demo="action-sheet">

## Basic Usage
``` js
quasar.action.sheet({
  title: 'Article Actions',
  buttons: [
    {
      label: 'Delete',
      icon: 'delete',
      handler: function() {
        quasar.notify.positive('Deleted Article');
      }
    },
    ...,
    {
      label: 'Cancel',
      icon: 'cancel',
      classes: 'text-primary',
      handler: function() {
        // quasar.notify('Cancelled...');
      }
    }
  ]
});
```

The last button specified is always used as a *Cancel* option to dismiss the Action Sheet and is displayed distinctively from the rest of the buttons.
