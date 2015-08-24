var express = require('express');
var router = express.Router();
var Twitter = require('twitter');   // TODO: change to official npm twit
var Twit = require('twit');
var config = require('../config');

var client = new Twitter(config.twitter_api_config);

router.get('/tweets/:screen_name', function (req, res) {
    var params = {
        screen_name: req.params.screen_name,
        count: 10
    };

    //client.get('statuses/user_timeline', params, function (error, tweets, response) {
    //    if (!error) {
    //        res.status(200).json({tweets: tweets});
    //    }
    //});
    res.status(200).json({"tweets":[{"created_at":"Fri Aug 21 09:52:38 +0000 2015","id":634664397374361600,"id_str":"634664397374361600","text":"[Jobs] Looking for System Administrator (DevOps) \nhttp://t.co/USU7OuVTPq #job","source":"<a href=\"http://jobvite.com\" rel=\"nofollow\">Jobvite</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":154310289,"id_str":"154310289","name":"AppDirect","screen_name":"AppDirect","location":"San Francisco, California","description":"The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv","url":"http://t.co/MRppRP4Ckl","entities":{"url":{"urls":[{"url":"http://t.co/MRppRP4Ckl","expanded_url":"http://appdirect.com","display_url":"appdirect.com","indices":[0,22]}]},"description":{"urls":[{"url":"http://t.co/qgUGIQMnlv","expanded_url":"http://info.appdirect.com/about/careers","display_url":"info.appdirect.com/about/careers","indices":[91,113]}]}},"protected":false,"followers_count":1318,"friends_count":384,"listed_count":83,"created_at":"Thu Jun 10 22:46:57 +0000 2010","favourites_count":265,"utc_offset":-25200,"time_zone":"Pacific Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":3074,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"2D2A26","profile_background_image_url":"http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png","profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png","profile_background_tile":false,"profile_image_url":"http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png","profile_image_url_https":"https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png","profile_link_color":"009ABF","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"E7F6FF","profile_text_color":"333333","profile_use_background_image":false,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":1,"entities":{"hashtags":[{"text":"job","indices":[73,77]}],"symbols":[],"user_mentions":[],"urls":[{"url":"http://t.co/USU7OuVTPq","expanded_url":"http://jobvite.com/m?31aQxhwk","display_url":"jobvite.com/m?31aQxhwk","indices":[50,72]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"},{"created_at":"Thu Aug 20 22:42:16 +0000 2015","id":634495693785288700,"id_str":"634495693785288705","text":".@AppDirect is proud to be the first cloud platform live with @Microsoft CSP APIs, enabling new CSP partners in days.","source":"<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":154310289,"id_str":"154310289","name":"AppDirect","screen_name":"AppDirect","location":"San Francisco, California","description":"The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv","url":"http://t.co/MRppRP4Ckl","entities":{"url":{"urls":[{"url":"http://t.co/MRppRP4Ckl","expanded_url":"http://appdirect.com","display_url":"appdirect.com","indices":[0,22]}]},"description":{"urls":[{"url":"http://t.co/qgUGIQMnlv","expanded_url":"http://info.appdirect.com/about/careers","display_url":"info.appdirect.com/about/careers","indices":[91,113]}]}},"protected":false,"followers_count":1318,"friends_count":384,"listed_count":83,"created_at":"Thu Jun 10 22:46:57 +0000 2010","favourites_count":265,"utc_offset":-25200,"time_zone":"Pacific Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":3074,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"2D2A26","profile_background_image_url":"http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png","profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png","profile_background_tile":false,"profile_image_url":"http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png","profile_image_url_https":"https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png","profile_link_color":"009ABF","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"E7F6FF","profile_text_color":"333333","profile_use_background_image":false,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":2,"favorite_count":0,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"AppDirect","name":"AppDirect","id":154310289,"id_str":"154310289","indices":[1,11]},{"screen_name":"Microsoft","name":"Microsoft","id":74286565,"id_str":"74286565","indices":[62,72]}],"urls":[]},"favorited":false,"retweeted":false,"lang":"en"},{"created_at":"Thu Aug 20 18:14:10 +0000 2015","id":634428224089497600,"id_str":"634428224089497600","text":".@tractionconf_io is coming to SF, partnering with @AppDirect. More from @crunchbase: http://t.co/LLoNSGqNg1","source":"<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":154310289,"id_str":"154310289","name":"AppDirect","screen_name":"AppDirect","location":"San Francisco, California","description":"The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv","url":"http://t.co/MRppRP4Ckl","entities":{"url":{"urls":[{"url":"http://t.co/MRppRP4Ckl","expanded_url":"http://appdirect.com","display_url":"appdirect.com","indices":[0,22]}]},"description":{"urls":[{"url":"http://t.co/qgUGIQMnlv","expanded_url":"http://info.appdirect.com/about/careers","display_url":"info.appdirect.com/about/careers","indices":[91,113]}]}},"protected":false,"followers_count":1318,"friends_count":384,"listed_count":83,"created_at":"Thu Jun 10 22:46:57 +0000 2010","favourites_count":265,"utc_offset":-25200,"time_zone":"Pacific Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":3074,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"2D2A26","profile_background_image_url":"http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png","profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png","profile_background_tile":false,"profile_image_url":"http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png","profile_image_url_https":"https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png","profile_link_color":"009ABF","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"E7F6FF","profile_text_color":"333333","profile_use_background_image":false,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":3,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"TractionConf_io","name":"Traction Conf","id":3018583425,"id_str":"3018583425","indices":[1,17]},{"screen_name":"AppDirect","name":"AppDirect","id":154310289,"id_str":"154310289","indices":[51,61]},{"screen_name":"crunchbase","name":"CrunchBase","id":14279577,"id_str":"14279577","indices":[73,84]}],"urls":[{"url":"http://t.co/LLoNSGqNg1","expanded_url":"http://appd.it/1J7q7va","display_url":"appd.it/1J7q7va","indices":[86,108]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"},{"created_at":"Tue Aug 18 22:34:56 +0000 2015","id":633769074019958800,"id_str":"633769074019958785","text":"RT @brianjjackson: Cloud marketplace @AppDirect expands its services for software developers and cloud services providers http://t.co/Np7hU…","source":"<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":154310289,"id_str":"154310289","name":"AppDirect","screen_name":"AppDirect","location":"San Francisco, California","description":"The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv","url":"http://t.co/MRppRP4Ckl","entities":{"url":{"urls":[{"url":"http://t.co/MRppRP4Ckl","expanded_url":"http://appdirect.com","display_url":"appdirect.com","indices":[0,22]}]},"description":{"urls":[{"url":"http://t.co/qgUGIQMnlv","expanded_url":"http://info.appdirect.com/about/careers","display_url":"info.appdirect.com/about/careers","indices":[91,113]}]}},"protected":false,"followers_count":1318,"friends_count":384,"listed_count":83,"created_at":"Thu Jun 10 22:46:57 +0000 2010","favourites_count":265,"utc_offset":-25200,"time_zone":"Pacific Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":3074,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"2D2A26","profile_background_image_url":"http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png","profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png","profile_background_tile":false,"profile_image_url":"http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png","profile_image_url_https":"https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png","profile_link_color":"009ABF","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"E7F6FF","profile_text_color":"333333","profile_use_background_image":false,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Tue Aug 18 20:55:13 +0000 2015","id":633743977703804900,"id_str":"633743977703804928","text":"Cloud marketplace @AppDirect expands its services for software developers and cloud services providers http://t.co/Np7hUl7roS #cloud","source":"<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":16753829,"id_str":"16753829","name":"Brian Jackson","screen_name":"brianjjackson","location":"ÜT: 43.66954,-79.33596","description":"Editor at ITBusiness.ca. Social Media Director of IT World Canada. Host 'All Hands on Tech'. Urban paddler. Batman fan. Coffee drinker. I ask questions.","url":"http://t.co/Qz6CekhI9j","entities":{"url":{"urls":[{"url":"http://t.co/Qz6CekhI9j","expanded_url":"http://www.itbusiness.ca","display_url":"itbusiness.ca","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":2562,"friends_count":765,"listed_count":204,"created_at":"Wed Oct 15 03:33:42 +0000 2008","favourites_count":111,"utc_offset":-18000,"time_zone":"Quito","geo_enabled":true,"verified":false,"statuses_count":10719,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"E6EBE7","profile_background_image_url":"http://pbs.twimg.com/profile_background_images/443370321052069888/hihoVAxX.jpeg","profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/443370321052069888/hihoVAxX.jpeg","profile_background_tile":true,"profile_image_url":"http://pbs.twimg.com/profile_images/529299171451219968/i63Pilrf_normal.jpeg","profile_image_url_https":"https://pbs.twimg.com/profile_images/529299171451219968/i63Pilrf_normal.jpeg","profile_banner_url":"https://pbs.twimg.com/profile_banners/16753829/1402341219","profile_link_color":"E00B1D","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"E3E2DE","profile_text_color":"634047","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":2,"favorite_count":0,"entities":{"hashtags":[{"text":"cloud","indices":[126,132]}],"symbols":[],"user_mentions":[{"screen_name":"AppDirect","name":"AppDirect","id":154310289,"id_str":"154310289","indices":[18,28]}],"urls":[{"url":"http://t.co/Np7hUl7roS","expanded_url":"http://www.itbusiness.ca/news/appdirect-extends-cloud-marketplace-to-isvs/58920","display_url":"itbusiness.ca/news/appdirect…","indices":[103,125]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"},"is_quote_status":false,"retweet_count":2,"favorite_count":0,"entities":{"hashtags":[{"text":"cloud","indices":[139,140]}],"symbols":[],"user_mentions":[{"screen_name":"brianjjackson","name":"Brian Jackson","id":16753829,"id_str":"16753829","indices":[3,17]},{"screen_name":"AppDirect","name":"AppDirect","id":154310289,"id_str":"154310289","indices":[37,47]}],"urls":[{"url":"http://t.co/Np7hUl7roS","expanded_url":"http://www.itbusiness.ca/news/appdirect-extends-cloud-marketplace-to-isvs/58920","display_url":"itbusiness.ca/news/appdirect…","indices":[122,140]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"},{"created_at":"Tue Aug 18 20:47:07 +0000 2015","id":633741938886180900,"id_str":"633741938886180864","text":".@agathamc conducts SWOT analysis of @AppDirect in @451Research report, dives into Monetization Suite capabilities http://t.co/FZJa9kyEuc","source":"<a href=\"http://www.hubspot.com/\" rel=\"nofollow\">HubSpot</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":154310289,"id_str":"154310289","name":"AppDirect","screen_name":"AppDirect","location":"San Francisco, California","description":"The leading monetization and management platform for cloud service commerce. We're hiring: http://t.co/qgUGIQMnlv","url":"http://t.co/MRppRP4Ckl","entities":{"url":{"urls":[{"url":"http://t.co/MRppRP4Ckl","expanded_url":"http://appdirect.com","display_url":"appdirect.com","indices":[0,22]}]},"description":{"urls":[{"url":"http://t.co/qgUGIQMnlv","expanded_url":"http://info.appdirect.com/about/careers","display_url":"info.appdirect.com/about/careers","indices":[91,113]}]}},"protected":false,"followers_count":1318,"friends_count":384,"listed_count":83,"created_at":"Thu Jun 10 22:46:57 +0000 2010","favourites_count":265,"utc_offset":-25200,"time_zone":"Pacific Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":3074,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"2D2A26","profile_background_image_url":"http://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png","profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/830856509/0e0fabf0437a68b0fdf92bb3219279a0.png","profile_background_tile":false,"profile_image_url":"http://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png","profile_image_url_https":"https://pbs.twimg.com/profile_images/3430349373/c10e337e41565eff02758d7fa3a85946_normal.png","profile_link_color":"009ABF","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"E7F6FF","profile_text_color":"333333","profile_use_background_image":false,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"agathamc","name":"Agatha Poon","id":46992595,"id_str":"46992595","indices":[1,10]},{"screen_name":"AppDirect","name":"AppDirect","id":154310289,"id_str":"154310289","indices":[37,47]},{"screen_name":"451Research","name":"451 Research","id":11064542,"id_str":"11064542","indices":[51,63]}],"urls":[{"url":"http://t.co/FZJa9kyEuc","expanded_url":"http://appd.it/1EAry0S","display_url":"appd.it/1EAry0S","indices":[115,137]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"}]});
});

module.exports = router;