(function ($) {
    'use strict';
    var multiCheckbox = {

        init: function (element) {
            $(element).on('change', 'input[type="checkbox"]', this.eventHandler.bind(this));
        },

        eventHandler: function (event) {
            this.toggle($(event.delegateTarget), $(event.currentTarget));
        },

        toggle: function ($delegate, $checkbox) {
            var $toggle = $delegate.find('input[type="checkbox"]').eq(0),
                $checkboxes = $delegate.find('input[type="checkbox"]:gt(0)');

            $toggle.data('toggle', true);

            if ($checkbox.data('toggle')) {
                $checkboxes.prop('checked', $checkbox.prop('checked'));
            } else {
                $toggle.prop('checked', ($checkboxes.length === $checkboxes.filter(':checked').length));
            }
        }
    };

    $.fn.multiCheckbox = this.each(function () {
        multiCheckbox.init(this);
    });

}(jQuery));
