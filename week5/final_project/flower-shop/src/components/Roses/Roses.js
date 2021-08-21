import React from 'react';


const Roses = () => {
  return (
    <div>
      <div class="title-container-roses">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Rose Arrangements</h1>
            <p class="lead fw-normal text-white-50 mb-0">A romantic gesture for any occasion.</p>
          </div>
        </div>
      </div>

    <div class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1580740132087-761c25cacbf6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHJvc2VzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Fancy Product</h5>
                            {/* Product price */}
                            $40.00 - $80.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">View options</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Sale badge */}
                    <div class="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}} >Sale</div>
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1592023066970-922286ffbf5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvc2UlMjBmbG93ZXIlMjBhcnJhbmdlbWVudHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Special Item</h5>
                            {/* Product reviews */}
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            {/* Product price */}
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Sale badge */}
                    <div class="badge bg-dark text-white position-absolute" style={{top:'0.5rem', right:'0.5rem'}}>Sale</div>
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1550042432-35259bb3fb61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc5fHxyb3Nlc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4"> 
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Sale Item</h5>
                            {/* Product price */}
                            <span class="text-muted text-decoration-line-through">$50.00</span>
                            $25.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1599733594230-6b823276abcc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHJvc2VzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Popular Item</h5>
                            {/* Product reviews */}
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            {/* Product price */}
                            $40.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Sale badge */}
                    <div class="badge bg-dark text-white position-absolute" style={{top:'0.5rem', right:'0.5rem'}}>Sale</div>
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1613508636209-cd13d894e15b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHJvc2UlMjBmbG93ZXIlMjBhcnJhbmdlbWVudHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Sale Item</h5>
                            {/* Product price */}
                            <span class="text-muted text-decoration-line-through">$50.00</span>
                            $25.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1553978459-73851a239eb0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxyb3NlJTIwZmxvd2VyJTIwYXJyYW5nZW1lbnRzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Fancy Product</h5>
                            {/* Product price */}
                            $120.00 - $280.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">View options</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Sale badge */}
                    <div class="badge bg-dark text-white position-absolute" style={{top:'0.5rem', right:'0.5rem'}}>Sale</div>
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1623693132386-60b58c228dce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHJvc2UlMjBmbG93ZXIlMjBhcnJhbmdlbWVudHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Special Item</h5>
                            {/* Product reviews */}
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            {/* Product price */}
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $18.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Product image */}
                    <img class="card-img-top" src="card-img-top" src="https://images.unsplash.com/photo-1550512108-2c2184f5dac4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHxyb3NlJTIwZmxvd2VyJTIwYXJyYW5nZW1lbnRzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
                    {/* Product details */}
                    <div class="card-body p-4">
                        <div class="text-center">
                            {/* Product name */}
                            <h5 class="fw-bolder">Popular Item</h5>
                            {/* Product reviews */}
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            {/* Product price */}
                            $40.00
                        </div>
                    </div>
                    {/* Product actions */}
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Add to cart</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  );
}

export default Roses;