const d = new Date();
const date = d.toISOString();

var min = 'date';
var max = '2022-12-10';

mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

mobiscroll.datepicker('#demo-1-week', {
    controls: ['calendar'],
    display: 'inline',
    calendarType: 'week',
    calendarSize: 1,
    min: min,
    max: max,
});