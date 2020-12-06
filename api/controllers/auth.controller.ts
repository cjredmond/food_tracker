import { Request, Router, Response } from 'express';
import { Auth, Database } from '../models';
import passport from "passport";
import util from "util";
import url from "url";
import querystring from "querystring";

// require("dotenv").config();

// -------------- ROUTES ------------- //
const router: Router = Router();

router.post('/login', async (req: Request, res: Response) => {
    res.send(await Auth.login(req.body.email, req.body.password));
});

router.get('/test', async (req: Request, res: Response) => {
    const fetch = require("node-fetch");
    const testing = await fetch("https://api.twitter.com/2/search/adaptive.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_quote_count=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&send_error_codes=true&simple_quoted_tweet=true&q=(from%3Atestingdelete11)&count=20&query_source=typed_query&pc=1&spelling_corrections=1&ext=mediaStats%2ChighlightedLabel", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "x-csrf-token": "f86abf741ad2bb5ed2cf9e6ea37d99c4",
          "x-guest-token": "1312481828973039620",
          "x-twitter-active-user": "yes",
          "x-twitter-client-language": "en",
          "cookie": "personalization_id=\"v1_Be5E8yFIB7alnKrAuHeUhw==\"; guest_id=v1%3A160175502740481055; gt=1312481828973039620; ct0=f86abf741ad2bb5ed2cf9e6ea37d99c4; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCJcaCvB0AToMY3NyZl9p%250AZCIlYWY0OTNjYWY5YWI4ZWZiOGUzNzkwNWU2YmFlYmJkY2E6B2lkIiU2YjYy%250AZWMxNzIxMmE4NjVmZmJhNjk3NzFlOWQ5NzQ3Yw%253D%253D--ba19efbb038db58a1eb46e1e5cf689b1108cdfc5; external_referer=padhuUp37zjgzgv1mFWxJ12Ozwit7owX|0|8e8t2xd8A2w%3D; _ga=GA1.2.434920061.1601755028; _gid=GA1.2.1381415121.1601755028; tfw_exp=0"
        },
        "referrer": "https://twitter.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
      });

    res.send(await testing.json());
});

export const AuthController: Router = router;