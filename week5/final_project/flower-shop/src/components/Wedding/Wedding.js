import React from 'react';


const Wedding = () => {
  return (
    <div>
      <div class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Wedding Arrangements</h1>
            <p class="lead fw-normal text-white-50 mb-0">The best flowers for your special day.</p>
          </div>
        </div>
      </div>

    <div class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
                <div class="card h-100">
                    {/* Product image */}
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1522142540300-60ae5b4bc569?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxmbG93ZXIlMjBhcnJhbmdlbWVudHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1484677460604-9c1334e783a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcyfHxmbG93ZXIlMjBhcnJhbmdlbWVudHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1525258946800-98cfd641d0de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHdlZGRpbmclMjBmbG93ZXIlMjBib3VxdWV0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1525096122400-e43fa92b933f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGZsb3dlciUyMGFycmFuZ2VtZW50c3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1508182398296-11adf90352d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHx3ZWRkaW5nJTIwZmxvd2VyJTIwYm91cXVldHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1521463405500-2bbe81bb2645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxmbG93ZXIlMjBhcnJhbmdlbWVudHN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1535573079-f0ea762f68fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdlZGRpbmclMjBmbG93ZXIlMjBib3VxdWV0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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
                    <img class="card-img-top" src="card-img-top" src="https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHdlZGRpbmclMjBmbG93ZXIlMjBib3VxdWV0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="flowers" />
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

export default Wedding;