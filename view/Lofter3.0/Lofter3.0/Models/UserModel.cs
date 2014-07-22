using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lofter3._0.Models
{
    public class UserModel
    {
             public int UserID { get; set; }                 //用户编号
             public string UserName { get; set; }            //用户名
             public string Password { get; set; }            //密码
    }

    //以页面为主的用户登陆模型
     public class LoginModel
     {
         public string UserName { get; set; }            //用户名
         public string Password { get; set; }            //密码
     }

    //以页面为主的用户注册模式
     public class RegeditModel
     {
         public string UserName { get; set; }            //用户名
         public string Password { get; set; }            //密码
         public int Sex { get; set; }                    //性别
         public int Age { get; set; }                    //年龄
     }
}

