### Create a book

To create a book, use the form on the left side of the page.

Fill the form with the information of the book

Field of the form :

| Name     |      Type     |
|----------|:-------------:|
| Title    |  String       |
| Author   |  String       |
| Summary  | Text          |
| Price    | Double        |
| Date of publication  | Date (format: yyyy-MM-dd) |

When you filled the form, click on the `Add` button.

The book will be added to the table under the form

### Update a book

In the table of book, click on the `Edit` button.

A form will appear in the table. You can modify the information of a book and click on `Update` to save the modification.

### Delete a book
 
In the table of book, click on the `Delete` button.

Once you clicked on the button, the book will be deleted in the database and will disappear.

### Filter books

The form on the right of the screen allows you to filter the books

* The fields `Title` and `Author` must match the exact value of a book to return a result.
* The field `Summary` will return a result if the summary contains the filter that you set
* The field `Price` is the maximum price of the books. This filter returns every books where the price is inferior of the value that you set
* The fields `Start date` and `End date` allow to get the books wich contains a date of publication between the dates you set. 
If you just set a value for `Start date`, the application will show the books where the date of publication is superior of the value.
If you just set a value for `End date`, the application will show the books where the date of publication is inferior of the value.
