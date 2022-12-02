import React from 'react'


const Navebar = () => {
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <img class="navbar-brand" src="./images/logo.svg"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#"><img src='./images/icon-todo.svg'></img>  Todo List</a></li>
            <li><a class="dropdown-item" href="#"><img src='./images/icon-calendar.svg'></img>  Calendar</a></li>
            
            <li><a class="dropdown-item" href="#"><img src='./images/icon-reminders.svg'></img> Reminders</a></li>
            <li><a class="dropdown-item" href="#"><img src='./images/icon-planning.svg'></img>  Planning</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">History</a></li>
            <li><a class="dropdown-item" href="#">Our Team</a></li>
            
            <li><a class="dropdown-item" href="#">Blog</a></li>
          </ul>
        </li>
         <a class="nav-link" href="#">Careers</a>
        <a class="nav-link" href="#">About</a>
        
      
        
      </div> 
      <form class="d-flex justify-content-end">
        <button className='btn btn-light'>Login</button>
        
        <button class="btn btn-outline-dark" type="submit">Register</button>
      </form>

</div>
     
    
  </div>
</nav>

    </div>
  )
}

export default Navebar