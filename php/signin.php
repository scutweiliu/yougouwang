    <?php  
    	header("Content-type: text/html; charset=utf-8");
        if(isset($_POST["submit"]) && $_POST["submit"] == "点击登录")  
        {  
            if($_POST["username"] == "" || $_POST["password"] == "")  
            {  
                echo "<script type='text/javascript' charset='utf-8'>alert('请输入账号密码'); history.back(-1);</script>";  
            }  
            else if($_POST["username"] == "weiliu" || $_POST["password"] == "scutweiliu")
            {
                echo "<script type='text/javascript' charset='utf-8'>alert('登陆成功');history.back(-1);</script>";
            }
            else 
            {
            	echo "<script type='text/javascript' charset='utf-8'>alert('用户名或密码不正确');history.back(-1);</script>";
            } 
        }  
        else  
        {  
            echo "<script>alert('提交未成功！'); history.back(-1);</script>";  
        }  
      
    ?>  