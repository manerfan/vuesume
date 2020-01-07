import axios from 'axios';
import json5 from 'json5';
import {UserData} from '@/api/user_interface';
import {Rss} from '@/api/rss_interface';

export default {
    /**
     * 获取data.json5内容
     */
    init(cb: (d: UserData) => void): void {
        axios.get<string>('/data.json5', {
            params: {
                // 为了解决修改完配置后无法立即生效的问题
                version: (new Date()).getTime(),
            },
        }).then(({data}) => {
            cb(json5.parse(data));
        });
    },

    /**
     * 获取rss订阅
     * https://rss2json.com/
     */
    rss(rss: string, cb: (d: Rss) => void, final: () => void, error: (reason: any) => void): void {
        axios.get<Rss>('https://api.rss2json.com/v1/api.json', {
            params: {
                rss_url: rss,
            },
        }).then(({data}) => {
            cb(data);
        }).catch(error).finally(final);
    },
};
