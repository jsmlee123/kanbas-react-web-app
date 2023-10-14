import ModuleList from "../Modules/ModuleList";


function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <ModuleList />
      </div>
      
      <div className="col-3 pe-5">
        <div >
          <h5>Course Status</h5>
          <div class="d-flex flex-row flex-grow-1">
              <button class="btn btn-outline-secondary wd-button-medium" type="button">Unpublish</button>
              <button class="btn btn-outline-secondary wd-button-medium" type="button">Published</button>
          </div>
          <div class="d-flex flex-column mt-3">
              <a href="#" class="wd-non-decorated">
                  <button class="btn btn-outline-secondary wd-button-medium wd-long-button text-start" type="button">
                      Import Existing Content
                  </button>
              </a>
              <a href="#" class="wd-non-decorated">
                  <button class="btn btn-outline-secondary wd-button-medium wd-long-button text-start" type="button">
                      Choose Home Page
                  </button>
              </a>
              <a href="#" class="wd-non-decorated">
                  <button class="btn btn-outline-secondary wd-button-medium wd-long-button text-start" type="button">
                      View course Stream
                  </button>
              </a>
              <a href="#" class="wd-non-decorated">
                  <button class="btn btn-outline-secondary wd-button-medium wd-long-button text-start" type="button">
                      New Announcement
                  </button>
              </a>
              <a href="#" class="wd-non-decorated">
                  <button class="btn btn-outline-secondary wd-button-medium wd-long-button text-start" type="button">
                      New Analytics
                  </button>
              </a>
              <a href="#" class="wd-non-decorated">
                  <button class="btn btn-outline-secondary wd-button-medium wd-long-button text-start" type="button">
                      View course Notifications
                  </button>
              </a>
              <div class="mt-3 mb-3">
                  <h5>To Do</h5>
                  <hr/>
                  <a href="#" class="wd-red wd-non-decorated">Grade A1 - ENV + HTML</a>
              </div>

              <div class="d-flex justify-content-between">
                  <h5>Coming Up</h5>
                  
                  <div class="float-end">
                      <a href="#" class="wd-red wd-non-decorated">View Calendar</a>
                  </div>
              </div>
                <hr/>
                <a href="#" class="wd-red wd-non-decorated">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
                <a href="#" class="wd-red wd-non-decorated">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
                <a href="#" class="wd-red wd-non-decorated">CS5610 06 SP23 Lecture Sep 11 at 6pm</a>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
