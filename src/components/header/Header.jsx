import React from 'react'
import './style.css'

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BTECH
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">2025 Batch Jobs</a></li>
            <li><a class="dropdown-item" href="#">2024 Batch Jobs</a></li>
            <li><a class="dropdown-item" href="#">2023 Batch Jobs</a></li>
            <li><a class="dropdown-item" href="#">2022 Batch Jobs</a></li>
            <li><a class="dropdown-item" href="#">2021 Batch Jobs</a></li>
            <li><a class="dropdown-item" href="#">2020 Batch Jobs</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">B.E B.Tech Jobs</a></li>
            <li><a class="dropdown-item" href="#">M.E M.Tech Jobs</a></li>
            <li><a class="dropdown-item" href="#">BCA Jobs</a></li>
            <li><a class="dropdown-item" href="#">MCA Jobs</a></li>
            <li><a class="dropdown-item" href="#">BBA Jobs</a></li>
            <li><a class="dropdown-item" href="#">B.SC Jobs</a></li>
            <li><a class="dropdown-item" href="#">M.SC Jobs</a></li>
            <li><a class="dropdown-item" href="#">B.COM Jobs</a></li>
            <li><a class="dropdown-item" href="#">BA Jobs</a></li>
            <li><a class="dropdown-item" href="#"> Jobs</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LOCATION
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">BANGALORE Jobs</a></li>
            <li><a class="dropdown-item" href="#">CHENNAI Jobs</a></li>
            <li><a class="dropdown-item" href="#">HYDERABAD Jobs</a></li>
            <li><a class="dropdown-item" href="#">PUNE Jobs</a></li>
            <li><a class="dropdown-item" href="#">GURGOAN Jobs</a></li>
           
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">CONTACT US</a>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header