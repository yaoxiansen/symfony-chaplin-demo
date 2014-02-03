fos.Router.setData({"base_url":"","routes":{"home":{"tokens":[["text","\/"]],"defaults":[],"requirements":[],"hosttokens":[]},"books_list":{"tokens":[["text","\/books"]],"defaults":[],"requirements":[],"hosttokens":[]},"books_show":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/books"]],"defaults":[],"requirements":[],"hosttokens":[]},"get_books":{"tokens":[["variable",".","json|xml|html","_format"],["text","\/api\/books"]],"defaults":{"_format":"json"},"requirements":{"_method":"GET","_format":"json|xml|html"},"hosttokens":[]},"get_book":{"tokens":[["variable",".","json|xml|html","_format"],["variable","\/","[^\/\\.]++","id"],["text","\/api\/books"]],"defaults":{"_format":"json"},"requirements":{"_method":"GET","_format":"json|xml|html"},"hosttokens":[]},"post_books":{"tokens":[["variable",".","json|xml|html","_format"],["text","\/api\/books"]],"defaults":{"_format":"json"},"requirements":{"_method":"POST","_format":"json|xml|html"},"hosttokens":[]},"put_book":{"tokens":[["variable",".","json|xml|html","_format"],["variable","\/","[^\/\\.]++","id"],["text","\/api\/books"]],"defaults":{"_format":"json"},"requirements":{"_method":"PUT","_format":"json|xml|html"},"hosttokens":[]},"delete_book":{"tokens":[["variable",".","json|xml|html","_format"],["variable","\/","[^\/\\.]++","id"],["text","\/api\/books"]],"defaults":{"_format":"json"},"requirements":{"_method":"DELETE","_format":"json|xml|html"},"hosttokens":[]},"fos_user_security_login":{"tokens":[["text","\/login"]],"defaults":[],"requirements":[],"hosttokens":[]}},"prefix":"","host":"localhost","scheme":"http"});