import React from 'react';
import './Banner.css'

const Summary = () => {
     return (
          <div className="summary-container mb-4">
          <div class="stats stats-vertical lg:stats-horizontal">
            <div class="stat">
              <div class="stat-figure review">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">Total Reviews</div>
              <div class="review stat-value">55.6K</div>
              <div class="stat-desc">21% more than last month</div>
            </div>
          
            <div class="stat">
              <div class="stat-figure review">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">Customers</div>
              <div class="stat-value text-secondary">2.6M</div>
            </div>
          
            <div class="stat">
              <div class="stat-figure text-secondary">
                <div class="avatar online"></div>
              </div>
              <div class="stat-value">500+</div>
              <div class="stat-title">Tools & Parts</div>
              <div class="stat-desc text-secondary">Upcoming</div>
            </div>
            <div class="stat">
              <div class="stat-figure text-secondary">
               
              </div>
              <div class="stat-value">10000$</div>
              <div class="stat-title">Annual Revenue</div>
              <div class="stat-desc text-secondary">
                Total revenue 19999999999999999+
              </div>
            </div>
            <div class="stat">
              <div class="stat-figure review">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">New Registers</div>
              <div class="stat-value">1,200</div>
              <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
      </div>
     );
};

export default Summary;