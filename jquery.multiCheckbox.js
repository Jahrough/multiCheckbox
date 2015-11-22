(function ($) {
    'use strict';
    var module = {
        settings: {
            input: 'input[type="checkbox"]'
        },

        init: function (element) {
            $(element).on('change', this.settings.input, this.eventHandler.bind(this));
        },

        eventHandler: function (event) {
            this.toggle($(event.delegateTarget), $(event.currentTarget));
        },

        toggle: function ($delegate, $current) {
            var $toggle = $delegate.find(this.settings.input).eq(0),
                $checkboxes = $delegate.find(this.settings.input + ':gt(0)');

            $toggle.data('toggle', true);

            if ($current.data('toggle')) {
                $checkboxes.prop('checked', $current.prop('checked'));
            } else {
                $toggle.prop('checked', ($checkboxes.length === $checkboxes.filter(':checked').length));
            }
        }
    };

    $.fn.multiCheckbox = function(){
        return this.each(function () {
            module.init(this);
        });
    };

}(jQuery));
