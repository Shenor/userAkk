class DataService {
  constructor() {
    this.url = "http://194.177.21.105:3000"; //194.177.21.105
  }

  editClient(body) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "POST",
        url: this.url + "/edit",
        crossDomian: true,
        data: body
      })
        .done(data => {
          resolve(data);
        })
        .fail(err => {
          reject(err);
        });
    });
  }

  deleteClient(delBody) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "POST",
        url: this.url + "/delete",
        crossDomian: true,
        data: { data: delBody }
      })
        .done(data => {
          resolve(data);
        })
        .fail(err => {
          reject(err);
        });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "POST",
        url: this.url + "/database",
        crossDomian: true
      })
        .done(data => {
          resolve(data);
        })
        .fail(err => {
          reject(err);
        });
    });
  }
}

module.exports = DataService;
