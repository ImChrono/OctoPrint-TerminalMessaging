/*
 * View model for Terminal Messaging
 *
 * Author: jneilliii
 * License: MIT
 */
$(function() {
    function TerminalmessagingViewModel(parameters) {
        var self = this;

        self.terminalViewModel = parameters[0];
         // Add a tag we can style to the gcode terminal output.
        self.terminalViewModel.log.subscribe(function(){
            //from plugin setting
            //
            $('#terminal-output span:contains("Recv:")').addClass('received small').text(function(){return $(this).text().replace('Recv: ','');});
            $('#terminal-output span:contains("Send:")').addClass('sent small').text(function(){return $(this).text().replace('Send: ','');});
        })
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: TerminalmessagingViewModel,
        dependencies: [ "terminalViewModel" ],
        elements: []
    });
});
