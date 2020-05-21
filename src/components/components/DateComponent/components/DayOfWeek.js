// @flow

import {PureComponent} from 'react'

const weekDaysOptions = [
    {
        label: 'Mondays',
        value: '1'
    },
    {
        label: 'Tuesdays',
        value: '2'
    },
    {
        label: 'Wednesdays',
        value: '3'
    },
    {
        label: 'Thursdays',
        value: '4'
    },
    {
        label: 'Fridays',
        value: '5'
    },
    {
        label: 'Saturdays',
        value: '6'
    },
    {
        label: 'Sundays',
        value: '0'
    }
];

const options = [
    {
        label: 'every day',
        value: '*'
    },
    {
        label: 'Mondays to Fridays',
        value: '1-5'
    },
    {
        label: 'Saturdays and Sundays',
        value: '6,0'
    }
].concat(weekDaysOptions);

export default class DayOfWeek extends PureComponent {
    static getOptions() {
        return options
    }

    static className: string = 'DayOfWeek';
}
