/**
 * ErrorResponse
 *
 * Simple error formatting from xhr requests (vue-resource).
 */
function ErrorResponse(body) {
  this.prefix = 'Error: ';
  this.body   = body;
}

ErrorResponse.prototype.toString = function() {
  if (this.body.error && this.body.exception) {
    return this.prefix + this.body.error + ' - ' + this.body.exception;
  } else if (this.body.error) {
    return this.prefix + this.body.error;
  } else if (this.body.statusText) {
    return this.prefix + this.body.statusText;
  } else {
    return this.prefix + 'An unknown error occurred.';
  }
};
