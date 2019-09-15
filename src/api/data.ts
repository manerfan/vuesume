import axios from 'axios';
import json5 from 'json5';
import {UserData} from '@/api/interfaces';

export default {
    init(cb: (d: UserData) => void): void {
        axios.get<string>('/data.json5').then(({data}) => {
            cb(json5.parse(data));
        });
    },
};
