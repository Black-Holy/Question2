// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require bootstrap-sprockets
//= require jquery
//= require moment
//= require fullcalendar
//= require_tree .
/* global $ */
$(function () {
    function eventCalendar() {
        return $('#calendar').fullCalendar({});
    }
    function clearCalendar() {
        $('#calendar').html('');
    }
    $(document).on('turbolinks:load', function () {
    eventCalendar();
    });
    $(document).on('turbolinks:before-cache', clearCalendar);

    $('#calendar').fullCalendar({
    events: '/calendars.json',
    titleFormat: 'YYYY年 M月',
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
    header: {
      left: 'month,basicWeek,basicDay',
      center: 'title',
      right: 'today prev,next'
    },
    defaultTimedEventDuration: '03:00:00',
    buttonText: {
        prev: '前',
        next: '次',
        prevYear: '前年',
        nextYear: '翌年',
        today: '今日',
        month: '月',
        week: '週',
        day: '日'
    },
    displayEventTime: true,
    timeFormat: "HH:mm",
    slotEventOverlap: false,
    eventColor: '#63ceef',
    eventTextColor: '#000000',
    });
});
