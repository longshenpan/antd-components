# antd-components
基于antd开发的组件

## react-styleguidist 问题

组件中目录下如果有readme.md文件， 则在组件中不用加入

```
    //@example [path.md]
    或者
    /**
     * @example [path.md]
     */
```

来引入markdown文件，否则会加载两遍组件在section区域

例如 indexl.jsx文件

```jsx
    /**
     * 具有星期提示信息和前缀信息的基础日期选择器
     * @example ./readme.md
     */
    export default class BasicDatePicker extends React.Component {
      static displayName = 'BasicDatePicker 日期选择框';

      static defaultProps = {
        width: '250px',
      };

      static propTypes = {
        /** input width */
        width: PropTypes.string,
        /** datePicker prefix info */
        prefixTxt: PropTypes.string.isRequired,
        /** show week info when select certain date */
        week: PropTypes.string.isRequired,
        /** function call on select certain date */
        onChange: PropTypes.func.isRequired,
      };

      render() {
        const { prefixTxt, width, week, onChange } = this.props;
        return (
          <span className="basic-container">
            <DatePicker
              className="basic-datepicker"
              style={{ width }}
              onChange={onChange}
            />
            <span className="prefix-text">{prefixTxt}</span>
            <span className="suffix-text">{week}</span>
          </span>
        );
      }
    }

```


搭建基于docker的nginx容器

1.  从hup上pull镜像

```
    docker pull nginx
```

2. 创建将要挂载的目录

```
    mkdir -p /data/nginx/{conf,conf.d,html,logs}
```

3.  先要有配置文件才能启动容器

vim /data/conf/nginx.conf

```
user root;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```

vim /data/nginx/conf.d/default.conf

```
server {  
    listen       80;  
    server_name  localhost;  
  
    #charset koi8-r;  
    #access_log  /var/log/nginx/log/host.access.log  main;  
  
    location / {  
        root   /usr/share/nginx/html;  
       # root   /usr/nginx/html;  
        index  index.html index.htm;  
        autoindex  on;  
    try_files $uri /index/index/page.html;  
        #try_files $uri /index/map/page.html;  
    }  
  
    #error_page  404              /404.html;  
  
    # redirect server error pages to the static page /50x.html  
    #  
    error_page   500 502 503 504  /50x.html;  
    location = /50x.html {  
        root   /usr/share/nginx/html;  
    }  
  
    # proxy the PHP scripts to Apache listening on 127.0.0.1:80  
    #  
    #location ~ \.php$ {  
    #    proxy_pass   http://127.0.0.1;  
    #}  
  
    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000  
    #  
    #location ~ \.php$ {  
    #    root           html;  
    #    fastcgi_pass   127.0.0.1:9000;  
    #    fastcgi_index  index.php;  
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;  
    #    include        fastcgi_params;  
    #}  
  
    # deny access to .htaccess files, if Apache's document root  
    # concurs with nginx's one  
    #  
    #location ~ /\.ht {  
    #    deny  all;  
    #}  
}
```


启动容器

```
    #将容器中nginx的80端口映射到本地的81端口
    docker run --name componentExample -d -p 8083:80 -v /root/apps/componentExample/nginx/html:/usr/share/nginx/html -v /root/apps/componentExample/nginx/conf/nginx.conf:/etc/nginx/nginx.conf  -v /root/apps/componentExample/nginx/logs:/var/log/nginx -v /root/apps/componentExample/nginx/conf.d:/etc/nginx/conf.d nginx
```

查看启动的容器

```
    docker ps
```






