var min = '2022-12-03T00:00';
var max = '2023-06-03T00:00';

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

