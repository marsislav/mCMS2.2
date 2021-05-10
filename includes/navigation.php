<header>
    <div class="container">
        <div class="logo">
            <a class="navbar-brand" href="index.php">
                <img src="img/logo.png" alt="Web Company! - mCMS 2.2" class="logoImg" />
            </a>
        </div>
        <nav class="
        
        ">
            <ul>
            <?php 
                $query = "SELECT * FROM pages WHERE page_position != '0' ORDER BY page_position ASC";
                $select_all_pages_query = mysqli_query($connection,$query);
                while($row = mysqli_fetch_assoc($select_all_pages_query)) {
                    $page_title = $row['page_title'];
                    $page_id = $row['page_id'];
                    echo "<li><a href='page.php?page_id=$page_id'>{$page_title}</a></li>";
                }          
            ?>
            </ul>
        </nav>
    </div>
    <!-- /.container -->

</header>