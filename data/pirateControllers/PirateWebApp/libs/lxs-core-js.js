/*
    Namespace for luxspace javascript libraries
*/
lxs = {};

/*
    Namespace for luxspace javascript libraries related with user interface
*/
lxs.ui = {};

/*
    Namespace for luxspace javascript libraries related with gis
*/
lxs.gis = {};

/*
    Namespace for luxspace javascript libraries related with document object model manipulation
*/
lxs.dom = {};

/*
    Namespace for luxspace javascript libraries related with javascript utilities
*/
lxs.util = {};
;
lxs.ajax = function () { }
;
lxs.ajax.AjaxjQuery = function () {
    this.__headers = {};
}

lxs.ajax.AjaxjQuery.prototype.setHeaders = function (headers) {
    this.__headers = headers;    
}

lxs.ajax.AjaxjQuery.prototype.sendRequest = function (url, parameters, method, callback, error) {
    $.ajax({
        url: url,
        type: method,
        contentType:  'application/json; charset=utf-8',
        xhrFields: { withCredentials: true },
        dataType: 'json',
        data: JSON.stringify(parameters),
        headers: this.__headers
    }).done(function (response) {
        callback(response);
    }).fail(function (data) {
        error(data);
    });
}
;/*
    DOMManagerDojo class
    Implementation of class to create or manipulate DOM elements using Dojo
*/

// Constructor
lxs.dom.DOMManagerDojo = function () {
}

/*
    TODO
*/;/*
    DOMManagerExtJs class
    Implementation of class to create or manipulate DOM elements using ExtJS
*/

// Constructor
lxs.dom.DOMManagerExtJs = function () {
}

/*
    TODO
*/;/*
    DOMManagerJquery class
    Implementation of class to create or manipulate DOM elements using jQuery
*/

// Constructor
lxs.dom.DOMManagerjQuery = function () {
}

// Get a DOM element by id
lxs.dom.DOMManagerjQuery.prototype.getElementById = function (id) {
	return $("#" + id);
}

// Get a DOM elements by class
lxs.dom.DOMManagerjQuery.prototype.getElementsByClass = function (className) {
	return $("." + className);
}

// Get a DOM elements by tag
lxs.dom.DOMManagerjQuery.prototype.getElementsByTag = function (tag) {
	return $("" + tag);
}

// Get DOM elements by query selector
lxs.dom.DOMManagerjQuery.prototype.getElementsByQuerySelector = function (querySelector) {
	return $(querySelector);
}

// Get DOM elements from childrens of an element by query selector
lxs.dom.DOMManagerjQuery.prototype.getChildrensByTag = function (element, tag) {
    return element.find("" + tag);
}

// Get DOM elements from childrens of an element by query selector
lxs.dom.DOMManagerjQuery.prototype.getChildrensByQuerySelector = function (element, querySelector) {
    return element.find(querySelector);
}

// Set an action when an event is triggered over an element
lxs.dom.DOMManagerjQuery.prototype.setAction = function(action, element, event) {
    if (event == lxs.dom.Events.CLICK)
        element.click(action);
    if (event == lxs.dom.Events.MOUSE_OVER && element.mouseover != null)
        element.mouseover(action);
    if (event == lxs.dom.Events.MOUSE_MOVE && element.mousemove != null)
        element.mousemove(action);
	if (event == lxs.dom.Events.FOCUS_OUT && element.focusout != null)
	    element.focusout(action);
}

// Prepend an element into other element
lxs.dom.DOMManagerjQuery.prototype.prepend = function (element, elementChild) {
	element.append(elementChild);	
}

// Append an element into other element
lxs.dom.DOMManagerjQuery.prototype.append = function (element, elementChild) {
	element.append(elementChild);
}

// Return if an element has the class passed as parameter
lxs.dom.DOMManagerjQuery.prototype.hasClass = function (element, className) {
	return element.hasClass(className);
}

// Empty the element passed as parameter
lxs.dom.DOMManagerjQuery.prototype.empty = function (element) {
    element.empty();
}

// Set an attribute to element
lxs.dom.DOMManagerjQuery.prototype.setAttribute = function (element, attribute, value) {
    element.attr(attribute, value);
}

// Get an attribute of element
lxs.dom.DOMManagerjQuery.prototype.getAttribute = function (element, attribute) {
    return element.attr(attribute);
}

// Get value of an element
lxs.dom.DOMManagerjQuery.prototype.getValue = function (element) {
    return element.val();
}

// Verify if exists element with id passed as parameter
lxs.dom.DOMManagerjQuery.prototype.exists = function (id) {
    return $("#" + id).length > 0;
}

// Add a class to an element
lxs.dom.DOMManagerjQuery.prototype.addClass = function (element, className) {
    element.addClass(className);
}

// Verify is an element is enabled
lxs.dom.DOMManagerjQuery.prototype.isEnabled = function (element) {
    return !element.prop("disabled");
}

// Enable or disable an element
lxs.dom.DOMManagerjQuery.prototype.setEnabled = function (element, enabled) {
    if (!enabled)
        element.prop("disabled", true);
    else
        element.prop("disabled", false);
}

// Change visibility of an element
lxs.dom.DOMManagerjQuery.prototype.setVisible = function (element, visible) {
    if (visible)
        element.show();
    else
        element.hide();
}

// Set a CSS style to a element
lxs.dom.DOMManagerjQuery.prototype.setStyle = function (element, style, value) {
    element.css(style, value);
}

// Remove a class of an element
lxs.dom.DOMManagerjQuery.prototype.removeClass = function (element, className) {
    element.removeClass(className);
}

// Create an element with tag passed as parameter
lxs.dom.DOMManagerjQuery.prototype.createElementByTag = function (tag) {
    var element = $("<" + tag + ">");
    return element;
}

// Create an image from path passed as parameter
lxs.dom.DOMManagerjQuery.prototype.createImage = function (pathImg, altText, width, height) {
    var img = $("<img>");
    img.attr("src", pathImg);
    if (altText != null)
        img.attr("alt", altText);
    if (width != null)
        img.css("width", width);
    if (height != null)
        img.css("height", height);
    return img;
}

// Return a span with text passed as parameter
lxs.dom.DOMManagerjQuery.prototype.createLabel = function (text) {
	var label = $("<label>");
	label.html(text);
	return label;
}

// Set HTML content into an element
lxs.dom.DOMManagerjQuery.prototype.setHTML = function (element, html) {
    element.html(html);
}

// Get HTML content of an element 
lxs.dom.DOMManagerjQuery.prototype.getHTML = function (element) {
    return element.html();
}

// Set focus in an element
lxs.dom.DOMManagerjQuery.prototype.setFocus = function (element) {
    element.focus();
}

// Create a button
lxs.dom.DOMManagerjQuery.prototype.createButton = function (text) {
    var button = $("<input>");
    button.attr("type", "button");
    button.attr("value", text);
    return button;
}

// Create a textbox
lxs.dom.DOMManagerjQuery.prototype.createTextbox = function () {
    var textbox = $("<input>");
    textbox.attr("type", "text");
    return textbox;
}

// Create a checkbox
lxs.dom.DOMManagerjQuery.prototype.createCheckbox = function (value) {    
    var checkbox = $("<input>");
    checkbox.attr("type", "checkbox");
    if (value != null)
        checkbox.attr("value", value);
    return checkbox;
}

// Check or uncheck a checkbox element
lxs.dom.DOMManagerjQuery.prototype.changeCheckbox = function (checkbox, checked) {
    checkbox.prop("checked", checked);
}

// Verify is a checkbox is checked
lxs.dom.DOMManagerjQuery.prototype.isCheckboxChecked = function (checkbox) {
    return checkbox.prop("checked");
}

// Return a td element with HTML content passed as parameter
lxs.dom.DOMManagerjQuery.prototype.createTableCell = function (cellContent, isHeader) {
	var cell = isHeader ? $("<th>") : $("<td>");
	cell.append(cellContent);
	return cell;
}

// Return a tr element with columns names
lxs.dom.DOMManagerjQuery.prototype.createTableHeader = function (columnsNames) {
	return this.createTableRow(columnsNames, true);
}

// Return a tr element with values passed as parameter
lxs.dom.DOMManagerjQuery.prototype.createTableRow = function (rowContent, isHeader) {
	var tr = $("<tr>");
	for (var i = 0; i < rowContent.length; i++) {
		var cellContent = rowContent[i];
		var td = this.createTableCell(cellContent, isHeader);
		tr.append(td);
	}
	return tr;
}

// Return a li element with ul elements with content passed as paramenter
lxs.dom.DOMManagerjQuery.prototype.createList = function (items, style) {
    if (style == null)
        style = "none"
    var ul = $("<ul>");
    ul.css("list-style-type", style);
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var li = $("<li>");        
        li.append(item);
        ul.append(li);
    }
    return ul;
}

// Get a context from canvas element id
lxs.dom.DOMManagerjQuery.prototype.getContextById = function (id, ctxType) {
    if (ctxType == null)
        ctxType = "2d";
    var cv = $("#" + id);
    return cv[0].getContext(ctxType)
}

// Clone the element passed as parameter
lxs.dom.DOMManagerjQuery.prototype.clone = function (element) {
    return element.clone(true);
}

;/*
    DOMManagerStandard class
    Implementation of class to create or manipulate DOM elements using standar DOM notation
*/

// Constructor
lxs.dom.DOMManagerStandard = function () {
}

/*
    TODO
*/;
/*
    Events class
    Implementation of class that represent events over dom elements
*/

// Constructor
lxs.dom.Events = function () {
}

// Enumerate types
lxs.dom.Events.CLICK = "click";
lxs.dom.Events.MOUSE_OVER = "mouseOver";
lxs.dom.Events.MOUSE_OUT = "mouseOut";
lxs.dom.Events.MOUSE_MOVE = "mouseMove";
lxs.dom.Events.LOAD = "load";
lxs.dom.Events.FOCUS_OUT = "focusOut";
;
lxs.Exception = function () {
}

lxs.Exception.MethodNotImplemented = function () {
	this.message = "Method not implemented.";
}
lxs.Exception.MethodNotImplemented.prototype = Object.create(Error.prototype);
;

lxs.Lang = function() {
}

lxs.Lang.SPANISH = "ES";
lxs.Lang.ENGLISH = "EN";
lxs.Lang.GERMAN = "GR";
;/*
    Array class
*/

// Constructor
lxs.util.Array = function (array) {
    this.__array = array;
}

// Returns if all the elements of array are numeric
lxs.util.Array.prototype.isNumeric = function () {
    for (var i = 0; i < this.__array.length; i++) {
        if (!Number.isInteger(this.__array[i]))
            return false;
    }
    return true;
}
;/*    
    Formatter class
    Implementation of a class to format any object into a html
*/

// Constructor
lxs.util.Formatter = function (action) {
    this.__action = action;
}

// Apply the current formatter to object passed as parameter and return the result
lxs.util.Formatter.prototype.apply = function (object) {
    if (this.__action != null) {
        return this.__action(object);
    }
    else {
        return object.toString();
    }
}
;/*
    Math class
    Implementation of class with math operators
*/

// Constructor
lxs.util.Math = function () {
}

// Returns a random number between two values passed as parameters
lxs.util.Math.getIntRandom = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
;/*    
    Structure class  
*/

// Constructor
lxs.ui.Structure = function () {	
}

// Get value of structure from variable location
// For example:
//   structure = { label: 'Prize', prize: { dollar: 50, euros: 40 }
//   location = "prize.dollar";
//   result => 50
lxs.ui.Structure.getValueFromLocation = function (data, location) {
	var locationParts = location.split(".");
	var path = data;
	for (var i = 0; i < locationParts.length; i++) {
		var locationPart = locationParts[i];
		path = path[locationPart];
	}
	var value = path;
	return value;
}
;/*    
    Button class
    Implementation of a class that represent an button
*/

// Construct
lxs.ui.Button = function (text, img, fnClick, domManager) {
    this._domManager = domManager;
    this._btn = this._createButtonElement(text, img);
    this._domManager.addClass(this._btn, lxs.ui.Button.DEFAULT_CLASS);
    if (fnClick)
        this.setAction(fnClick, lxs.dom.Events.CLICK);
}

// Constants
lxs.ui.Button.DEFAULT_CLASS = "lxsButton";

// Set button id
lxs.ui.Button.prototype.setId = function (id) {
    this._domManager.setAttribute(this._btn, "id", id);
}

// Create button element
lxs.ui.Button.prototype._createButtonElement = function (text, img) {
    throw new lxs.exception.MethodNotImplemented();
}

// Verify is button is enabled
lxs.ui.Button.prototype.isEnabled = function () {
    return this._domManager.isEnabled(this._btn);
}

// Disable or enable an element
lxs.ui.Button.prototype.setEnabled = function (enabled) {
    return this._domManager.setEnabled(this._btn, enabled);
}

// Hide or show the button
lxs.ui.Button.prototype.setVisible = function (visible) {
    return this._domManager.setVisible(this._btn, visible);
}

// Set function to execute when event is triggered
lxs.ui.Button.prototype.setAction = function (fn, event) {
    this._domManager.setAction(fn, this._btn, event);
}

// Add button into an element
lxs.ui.Button.prototype.render = function (element) {
    var btn = this._domManager.clone(this._btn);
    this._domManager.append(element, btn);
}
;;/*    
    Icon button class
    Implementation of a class that represent an button with an icon
*/

// Construct
lxs.ui.Button.IconButton = function (text, img, fnClick, className) {
    this.__className = className;
    lxs.ui.Button.call(this, text, img, fnClick, new lxs.dom.DOMManagerjQuery());
}

// Inheritance
lxs.ui.Button.IconButton.prototype = Object.create(lxs.ui.Button.prototype);

// Create button element
lxs.ui.Button.IconButton.prototype._createButtonElement = function (text, img) {
    var btn = this._domManager.createImage(img, text);
    this._domManager.setStyle(btn, "cursor", "pointer");
    this._domManager.addClass(btn, this.__className);
    return btn;
};/*    
    Standard button class
    Implementation of a class that represent an button
*/

// Construct
lxs.ui.Button.StandardButton = function (text, fnClick) {
    lxs.ui.Button.call(this, text, null, fnClick, new lxs.dom.DOMManagerjQuery()); // TODO: change lxs.dom.DOMManagerjQuery for lxs.dom.DOMManagerStandard
}

// Inheritance
lxs.ui.Button.StandardButton.prototype = Object.create(lxs.ui.Button.prototype);

// Create button element
lxs.ui.Button.StandardButton.prototype._createButtonElement = function (text, img) {
    var btn = this._domManager.createButton(text);;
    return btn;
}
;/*    
    Table class
    Implementation of generic table    
*/

// Constructor
// Receives:
//   idDOMElement: id of dom element where table will be render
//   configuration: table _configuration in json format
//                  an example:
//                      { data : [{value1: "a", value2: { v: "b" }, value3: "c"}, {value1: "a2", value2: { v: "b2" }, value3: "c2"}],
//                        columns: [{id: "col1", text: "Value 1", location: "value1", click: function(cell) { alert(cell.data.value1); } },
//                                  {id: "col2", text: "Value 2", location: "value2.v", visible: false},
//                                  {id: "col3", text: "Value 3", formatter: new lxs.util.Formatter(function(cell { return "<span>" + cell.data.value3 + "</span>" }))} ]}
lxs.ui.Table = function (idDOMElement, configuration, domManager) {
    this._domManager = domManager;
    this._idDOMElement = idDOMElement;
    this._configuration = configuration;
    this._cells = this._createCells();
    this._buttons = [];
}

// Constants
lxs.ui.Table.TABLE_CONTAINER_CLASS = "tableContainerLxs";

/*
   Abstract methods
*/

// Clear the table
lxs.ui.Table.prototype._clear = function () {
    throw new lxs.Exception.MethodNotImplemented();
}

// Add a row to the UI table
lxs.ui.Table.prototype._addRowToUITable = function (values, position) {
    throw new lxs.Exception.MethodNotImplemented();
}

// Hide a column
lxs.ui.Table.prototype.hide = function (idColumn) {
    throw new lxs.Exception.MethodNotImplemented();
}

// Show a column
lxs.ui.Table.prototype.show = function (idColumn) {
    throw new lxs.Exception.MethodNotImplemented();
}

// Draw the table according its current status
lxs.ui.Table.prototype._draw = function () {
    throw new lxs.Exception.MethodNotImplemented();
}

// Return current configuration of the table
lxs.ui.Table.prototype.getCurrentStatus = function () {
    throw new lxs.Exception.MethodNotImplemented();
}

/*
   Methods
*/

// Get table id
lxs.ui.Table.prototype.getId = function () {
    return this._configuration.id;
}

// Get all the columns names from _configuration
lxs.ui.Table.prototype._getColumnsNames = function () {
    var names = [];
    for (var i = 0; i < this._configuration.columns.length; i++) {
        var column = this._configuration.columns[i];
        names.push(column.text);
    }
    return names;
}

// Get the column number with id passed as parameter
lxs.ui.Table.prototype._getColumnNumberById = function (id) {
    for (var i = 0; i < this._configuration.columns.length; i++) {
        var column = this._configuration.columns[i];
        if (column.id == id)
            return i;
    }
    return -1;
}

// Initialize main container
lxs.ui.Table.prototype._initializeMainContainer = function () {
    var element = this._domManager.getElementById(this._idDOMElement);
    element.addClass(lxs.ui.Table.TABLE_CONTAINER_CLASS);
}

// Initialize table header element according the column _configuration
lxs.ui.Table.prototype._initializeTableHeader = function () {
    var thead = this._domManager.getElementsByQuerySelector("#" + this._idDOMElement + ">" + "table" + ">" + "thead");
    if (thead.length == 0) {
        var element = this._domManager.getElementsByQuerySelector("#" + this._idDOMElement + ">" + "table");
        thead = this._domManager.createElementByTag("thead");
        this._domManager.prepend(element, thead);
    }
    var columnsNames = this._getColumnsNames();
    var headerRow = this._domManager.createTableHeader(columnsNames);
    this._domManager.append(thead, headerRow);
}

// Initialize table body element
lxs.ui.Table.prototype._initializeTableBody = function () {
    var tbody = this._domManager.getElementsByQuerySelector("#" + this._idDOMElement + ">" + "table" + ">" + "tbody");
    if (tbody.length == 0) {
        var element = this._domManager.getElementsByQuerySelector("#" + this._idDOMElement + ">" + "table");
        var tbody = this._domManager.createElementByTag("tbody");
        this._domManager.append(element, tbody);
    }
}

// Initialize table footer element
lxs.ui.Table.prototype._initializeTableFooter = function () {
    var tfooter = this._domManager.getElementsByQuerySelector("#" + this._idDOMElement + ">" + "table" + ">" + "tfooter");
    if (tfooter.length == 0) {
        var element = this._domManager.getElementsByQuerySelector("#" + this._idDOMElement + ">" + "table");
        var tfooter = this._domManager.createElementByTag("tfooter");
        this._domManager.append(element, tfooter);
    }
}

// Create table element
lxs.ui.Table.prototype._createTableElement = function () {
    var table = this._domManager.createElementByTag("table");
    return table;
}

// Initialize table element
lxs.ui.Table.prototype._initializeTable = function () {
    // Create DOM table
    var element = this._domManager.getElementById(this._idDOMElement);
    var table = this._createTableElement();
    this._domManager.append(element, table);
    this._domManager.setAttribute(table, "id", this._getIdTable());

    // Initialize header, body and footer of table
    this._initializeTableHeader();
    this._initializeTableBody();
    this._initializeTableFooter();
}

// Initialize div with actions available
lxs.ui.Table.prototype._initializeActionsPanel = function () {
    var element = this._domManager.getElementById(this._idDOMElement);
    var divActionPanel = this._domManager.createElementByTag("div");
    this._domManager.addClass(divActionPanel, "actionPanelTable");
    this._domManager.setAttribute(divActionPanel, "id", this._getIdDivActionsPanel());
    this._domManager.append(element, divActionPanel);
}

// Initialize div with message that will be display when data is empty
lxs.ui.Table.prototype._initializeNoDataDisplay = function () {
    var element = this._domManager.getElementById(this._idDOMElement);
    var divNoDataMessage = this._domManager.createElementByTag("div");
    this._domManager.setAttribute(divNoDataMessage, "id", this._getIdDivNoDataMessage())
    this._domManager.setStyle(divNoDataMessage, "display", "none");
    if (this._configuration.noDataMessage != null) {
        this._domManager.setHTML(divNoDataMessage, this._configuration.noDataMessage)
    }
    this._domManager.append(element, divNoDataMessage);
}

// Get id of table dom element
lxs.ui.Table.prototype._getIdTable = function () {
    return this._idDOMElement + "CustomTable";
}

// Get id of actions panel dom element
lxs.ui.Table.prototype._getIdDivActionsPanel = function () {
    return this._idDOMElement + "DivActionsPanel";
}

// Get id of div with message to empty data
lxs.ui.Table.prototype._getIdDivNoDataMessage = function () {
    return this._idDOMElement + "DivNoDataMessage";
}

// Initialize component
lxs.ui.Table.prototype._initialize = function () {
    this._initializeMainContainer();
    this._initializeTable();
    this._initializeActionsPanel();
    this._initializeNoDataDisplay();
}

// Return if the component was initialized
lxs.ui.Table.prototype._isInitialized = function () {
    return (this._domManager.exists(this._getIdTable()) && this._domManager.exists(this._getIdDivActionsPanel()));
}

// Get normal order of columns
lxs.ui.Table.prototype.__getNormalOrder = function () {
    var order = [];
    for (var i = 0; i < this._configuration.columns.length; i++) {
        order.push(i);
    }
    return order;
}

// Update cells according current _configuration
lxs.ui.Table.prototype._createCells = function (order) {
    if (order == null)
        order = this.__getNormalOrder();
    var cells = [];
    for (var i = 0; i < this._configuration.data.length; i++) {
        var cellsRows = [];
        for (var j = 0; j < order.length; j++) {
            var data = this._configuration.data[i];
            var pos = order[j];
            column = this._configuration.columns[pos];
            cell = new lxs.ui.Cell(data, column, this._domManager);
            cells.push(cell);
        }
    }
    return cells;
}

// Fill table with current cells
lxs.ui.Table.prototype._fillTable = function () {
    for (var i = 0; i < this.getRowsCount(); i++) {
        var cellsRows = this.getCellsByRow(i);
        this._addRowToUITable(cellsRows);
    }
    for (var i = 0; i < this._configuration.columns.length; i++) {
        var column = this._configuration.columns[i];
        if (column.visible != null && !column.visible) {
            this.hide(column.id);
        }
    }
}

// Fill actions panel
lxs.ui.Table.prototype._fillActionPanel = function () {
    var element = this._domManager.getElementById(this._getIdDivActionsPanel());
    for (var i = 0; i < this._buttons.length; i++) {
        var button = this._buttons[i];
        button.render(element);
    }
}

// Fill component
lxs.ui.Table.prototype._fill = function () {
    this._fillTable();
    this._fillActionPanel();
}

// Clear action panel content
lxs.ui.Table.prototype._clearActionPanel = function () {
    var element = this._domManager.getElementById(this._getIdDivActionsPanel());
    this._domManager.empty(element);
}

// Clear component
lxs.ui.Table.prototype._clear = function () {
    this._clearTable();
    this._clearActionPanel();
}

// Hide message to display no data
lxs.ui.Table.prototype._hideDisplayNoData = function () {
    var divNoDataMessage = this._domManager.getElementById(this._getIdDivNoDataMessage());
    this._domManager.setStyle(divNoDataMessage, "display", "none");
}

// Display a message when table hasn't data
lxs.ui.Table.prototype._showDisplayNoData = function () {
    var divNoDataMessage = this._domManager.getElementById(this._getIdDivNoDataMessage());
    this._domManager.setStyle(divNoDataMessage, "display", "block");
}

// Render the table according its current _configuration
lxs.ui.Table.prototype.render = function () {
    // Clear content of UI table
    this._clear();

    // Fill component
    this._fill();

    // Redraw UI table
    this._draw();
}

// Get current data
lxs.ui.Table.prototype.getData = function (data) {
    return this._configuration.data;
}

// Update data managed by table
lxs.ui.Table.prototype.updateData = function (data) {
    this._configuration.data = data;
    this._cells = this._createCells();
}

// Get a column by id
lxs.ui.Table.prototype.getColumnById = function (idColumn) {
    for (var i = 0; i < this._configuration.columns; i++) {
        var column = this._configuration.columns[i];
        if (column.id == idColumn) {
            return column
        }
    }
    return null;
}

// Get all cells of the column specified in parameter
lxs.ui.Table.prototype.getCellsByColumn = function (idColumn) {
    var cells = [];
    for (var i = 0; i < this._cells.length; i++) {
        var cell = this._cells[i];
        if (cell.column.id == idColumn) {
            cells.push(cell);
        }
    }
    return cells;
}

// Get all cells of the row specified in parameter
lxs.ui.Table.prototype.getCellsByRow = function (row) {
    var numColumns = this._configuration.columns.length;
    var initialPos = numColumns * row;
    var cells = [];
    for (var i = initialPos; i < initialPos + numColumns; i++) {
        var cell = this._cells[i];
        cells.push(cell);
    }
    return cells;
}

// Get count of rows of the table
lxs.ui.Table.prototype.getRowsCount = function () {
    var numColumns = this._configuration.columns.length;
    var numRows = this._cells.length / numColumns;
    return numRows;
}

// Add column to the table and returns cells generated
lxs.ui.Table.prototype.addRow = function (data) {
    for (var i = 0; i < this._configuration.columns.length; i++) {
        column = this._configuration.columns[i];
        cell = new lxs.ui.Cell(data, column, this._domManager);
        this._cells.push(cell);
    }
}

// Remove the row specified in parameter
lxs.ui.Table.prototype.removeRow = function (row) {
    var numColumns = this._configuration.columns.length;
    var initialPos = numColumns * row;
    this._cells.splice(initialPos, numColumns);
}

// Add a action to the action panel
lxs.ui.Table.prototype.addAction = function (text, img, fn) {
    var button;
    if (img != null)
        button = new lxs.ui.Button.IconButton(text, img, fn, "btnActionTable");
    else
        button = new lxs.ui.Button.StandardButton(text, fn);
    this._buttons.push(button);
    return button;
}
;/*
    LangjQueryDataTable class
    Class that store test of jQueryDataTable plugin in different languages
*/


lxs.ui.Table.jQueryDataTableLanguage = function (lang) {
	if (lang == lxs.Lang.ENGLISH) {
		this.json = lxs.ui.Table.jQueryDataTableLanguage.__JSON_ENGLISH_LANGUAGE;
	}
	else if (lang == lxs.Lang.GERMAN) {
		this.json = lxs.ui.Table.jQueryDataTableLanguage.__JSON_GERMAN_LANGUAGE;
	}
	else if (lang == lxs.Lang.SPANISH) {
	    this.json = lxs.ui.Table.jQueryDataTableLanguage.__JSON_SPANISH_LANGUAGE;
	}
	else {
		// By default, language is english
		this.json = lxs.ui.Table.jQueryDataTableLanguage.__JSON_ENGLISH_LANGUAGE;
	}
}

// Constant that store texts in german language
// JSON obtained from http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json
lxs.ui.Table.jQueryDataTableLanguage.__JSON_GERMAN_LANGUAGE = {
	"sEmptyTable": "Keine Daten in der Tabelle vorhanden",
	"sInfo": "_START_ bis _END_ von _TOTAL_ Einträgen",
	"sInfoEmpty": "0 bis 0 von 0 Einträgen",
	"sInfoFiltered": "(gefiltert von _MAX_ Einträgen)",
	"sInfoPostFix": "",
	"sInfoThousands": ".",
	"sLengthMenu": "_MENU_ Einträge anzeigen",
	"sLoadingRecords": "Wird geladen...",
	"sProcessing": "Bitte warten...",
	"sSearch": "Suchen",
	"sZeroRecords": "Keine Einträge vorhanden.",
	"oPaginate": {
		"sFirst": "Erste",
		"sPrevious": "Zurück",
		"sNext": "Nächste",
		"sLast": "Letzte"
	},
	"oAria": {
		"sSortAscending": ": aktivieren, um Spalte aufsteigend zu sortieren",
		"sSortDescending": ": aktivieren, um Spalte absteigend zu sortieren"
	},
	"custom": {
		"saveConfiguration": "Konfiguration speichern",
		"showHideColumns": "Spalten anzeigen/verbergen",
    }
};

// Constant that store texts in english language
// JSON obtained from http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/English.json
lxs.ui.Table.jQueryDataTableLanguage.__JSON_ENGLISH_LANGUAGE = {
	"sEmptyTable": "No data available in table",
	"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
	"sInfoEmpty": "Showing 0 to 0 of 0 entries",
	"sInfoFiltered": "(filtered from _MAX_ total entries)",
	"sInfoPostFix": "",
	"sInfoThousands": ",",
	"sLengthMenu": "Show _MENU_ entries",
	"sLoadingRecords": "Loading...",
	"sProcessing": "Processing...",
	"sSearch": "Filter:",
	"sZeroRecords": "No matching records found",
	"oPaginate": {
		"sFirst": "First",
		"sLast": "Last",
		"sNext": "Next",
		"sPrevious": "Previous"
	},
	"oAria": {
		"sSortAscending": ": activate to sort column ascending",
		"sSortDescending": ": activate to sort column descending"
	},
	"custom": {
		"saveConfiguration": "Save configuration",
		"showHideColumns": "Show/Hide columns",
	}
};


lxs.ui.Table.jQueryDataTableLanguage.__JSON_SPANISH_LANGUAGE = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún dato disponible en esta tabla",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    },
    "custom": {
        "saveConfiguration": "Guardar configuración",
        "showHideColumns": "Mostrar/ocultar columnas",
    }
};;/*
    TablejQueryDatTable class
    Implementation of table with jQuery DataTable library

    Requires: jQuery
              jQuery UI
              jQuery Datatable
*/

// Constructor
lxs.ui.Table.jQueryDataTable = function (idDOMElement, configuration, language) {
    // Call to constructor of superclass
    lxs.ui.Table.call(this, idDOMElement, configuration, new lxs.dom.DOMManagerjQuery());

    // Set language
    this._language = new lxs.ui.Table.jQueryDataTableLanguage(language);

    // Initialize options
    this.__options = {};
    this.__options[lxs.ui.Table.jQueryDataTable.Options.RESPONSIVE] = true;
    this.__options[lxs.ui.Table.jQueryDataTable.Options.COL_REORDER] = true;
}

// Inheritance
lxs.ui.Table.jQueryDataTable.prototype = Object.create(lxs.ui.Table.prototype);

// Constants
lxs.ui.Table.jQueryDataTable.Options = {};
lxs.ui.Table.jQueryDataTable.Options.RESPONSIVE = 0;
lxs.ui.Table.jQueryDataTable.Options.COL_REORDER = 1;
lxs.ui.Table.jQueryDataTable.Options.PAGING = 2;
lxs.ui.Table.jQueryDataTable.Options.ORDERING = 3;
lxs.ui.Table.jQueryDataTable.Options.SEARCHING = 4;
lxs.ui.Table.jQueryDataTable.Options.INFO = 5;
lxs.ui.Table.jQueryDataTable.Options.SCROLL_X = 6;
lxs.ui.Table.jQueryDataTable.Options.SCROLL_Y = 7;
lxs.ui.Table.jQueryDataTable.Options.SCROLL_COLLAPSE = 8;

// Initialize table options with default values
lxs.ui.Table.jQueryDataTable.prototype._initializeDefaultOptions = function () {
    this.__options = {};
    this.__options[lxs.ui.Table.jQueryDataTable.Options.RESPONSIVE] = true;
    this.__options[lxs.ui.Table.jQueryDataTable.Options.COL_REORDER] = true;
    this.__options[lxs.ui.Table.jQueryDataTable.Options.PAGING] = false;
    this.__options[lxs.ui.Table.jQueryDataTable.Options.ORDERING] = false;
    this.__options[lxs.ui.Table.jQueryDataTable.Options.SEARCHING] = false;
    this.__options[lxs.ui.Table.jQueryDataTable.Options.INFO] = true;
    this.__options[lxs.ui.Table.jQueryDataTable.Options.SCROLL_X] = null;
    this.__options[lxs.ui.Table.jQueryDataTable.Options.SCROLL_Y] = null;
    this.__options[lxs.ui.Table.jQueryDataTable.Options.SCROLL_COLLAPSE] = false;
}

// Clear all content of the table
lxs.ui.Table.jQueryDataTable.prototype._clearTable = function () {
    this._table.clear();
}

// Get the current status of the table (orders, visibility of columns)
lxs.ui.Table.jQueryDataTable.prototype.getCurrentStatus = function () {
    // Create object where will be stored the current status
    var currentStatus = [];

    // Get orders for each column (asc or desc)
    var orders = this._table.order();

    // Get columns order in the table
    var positionsColumns = this._table.colReorder.order();

    // Iterate over list with positions of columns
    for (var i = 0; i < positionsColumns.length; i++) {
        // Create column from position and initial configuration
        var pos = positionsColumns[i];
        var cfgColumn = this._configuration.columns[pos];
        var column = {};
        column.id = cfgColumn.id;

        // Get order of the column
        var orderColumn = null;
        for (var j = 0; j < orders.length; j++) {
            var order = orders[j];
            if (order[0] == i)
                orderColumn = order[1];
        }
        if (orderColumn != null)
            column.order = orderColumn

        // Get visibility of the column
        var dtColumn = this.__getDatatableColumnById(column.id);
        column.visible = dtColumn.visible();

        // Add column currentStatus the object to return
        currentStatus.push(column);
    }

    // Return configuration
    return currentStatus;
}

// Restore the table with status passed as parameter
lxs.ui.Table.jQueryDataTable.prototype.restoreFromStatus = function (status) {
    // Get current status of table
    var currentStatus = this.getCurrentStatus();

    // Get current order of columns
    var currentOrder = this._table.colReorder.order();

    // Create new order of columns from parameter
    var newOrder = [];
    for (var i = 0; i < currentOrder.length; i++) {  // Iterate over current order list
        // Get datatable column
        var pos = currentOrder[i];
        var columnAttribute = currentStatus[pos];
        var dtColumn = this.__getDatatableColumnById(columnAttribute.id);

        // Search the position of column in status passed as parameter
        var j = 0;
        while (status.ColumnsAttributes[j].Id != columnAttribute.id) {
            j += 1;
        }

        // Get column searched in last step
        var columnStatus = status.ColumnsAttributes[j];

        // Store new position of column
        newOrder[columnStatus.Position] = i;

        // Modify attributes of column from status        
        dtColumn.visible(columnStatus.Visible == 1 ? true : false);
        if (columnStatus.SortingOrder == 0)
            dtColumn.order("asc");
        else if (columnStatus.SortingOrder == 1)
            dtColumn.order("desc");
    }

    // Change order of columns
    this._table.colReorder.order(newOrder, this.__getNormalOrder());

    // Redraw the table
    this._table.draw();
}

// Add a row to the table with the cells passed as parameter
lxs.ui.Table.jQueryDataTable.prototype._addRowToUITable = function (cells) {
    // Extract html values from cells
    var values = [];
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var html = cell.getHTMLControl();
        values.push(html);
    }

    // Create HTML row
    var row = this._domManager.createTableRow(values, false);

    // Configure events action for row (if it is defined in configuration)
    var self = this;
    if (this._configuration.click != null)
        this._domManager.setAction(function () { self._configuration.click(cells); }, row, lxs.dom.Events.CLICK);
    if (this._configuration.mouseOver != null)
        this._domManager.setAction(function () { self._configuration.mouseOver(cells); }, row, lxs.dom.Events.MOUSE_OVER);

    // Add HTML row to the table
    this._table.row.add(row);
}

// Create table element
lxs.ui.Table.jQueryDataTable.prototype._createTableElement = function () {
    var table = this._domManager.createElementByTag("table");
    this._domManager.addClass(table, "display");
    this._domManager.addClass(table, "dt-responsive");
    this._domManager.addClass(table, "nowrap");

    this._domManager.setStyle(table, "width", "100%");
    return table;
}

// Get a datatable column object by id passed as parameter
lxs.ui.Table.jQueryDataTable.prototype.__getDatatableColumnById = function (id) {
    return this._table.column(id + ":" + "name");
}

// Create datatable columns from configuration
lxs.ui.Table.jQueryDataTable.prototype.__createDatatableColumns = function () {
    var datatableColumns = [];
    for (var i = 0; i < this._configuration.columns.length; i++) {
        var column = this._configuration.columns[i];
        var datatableColumn = { name: column.id };
        datatableColumns.push(datatableColumn);
    }
    return datatableColumns;
}

// Get HTML row of a feature
lxs.ui.Table.jQueryDataTable.prototype._getHTMLFeatureRow = function (feature) {
    var index = this._configuration.data.indexOf(feature);
    if (index != -1)
        return this._table.row(index).node();
    else
        return null;
}

// Hide a column
lxs.ui.Table.jQueryDataTable.prototype.hide = function (idColumn) {
    var column = this.__getDatatableColumnById(idColumn);
    column.visible(false);
}

// Show a column
lxs.ui.Table.jQueryDataTable.prototype.show = function (idColumn) {
    var column = this.__getDatatableColumnById(idColumn);
    column.visible(true);
}

// Update cells according current _configuration
lxs.ui.Table.jQueryDataTable.prototype._createCells = function () {
    var order = null;
    if (this._table != null) {
        order = this._table.colReorder.order();
    }
    return lxs.ui.Table.prototype._createCells.call(this, order);
}

// Return if column is visible
lxs.ui.Table.jQueryDataTable.prototype.isVisible = function (idColumn) {
    var column = this.__getDatatableColumnById(idColumn);
    return column.visible();
}

// Refresh each column of the table
lxs.ui.Table.jQueryDataTable.prototype.refresh = function () {
    var visibilityColumns = [];
    var columns = this._configuration.columns;
    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        visibilityColumns.push(this.isVisible(column.id));
        this.hide(column.id);
    }
    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        if (visibilityColumns[i])
            this.show(column.id);
    }
}

// Draw the table according its current status
lxs.ui.Table.jQueryDataTable.prototype._draw = function () {
    this._table.draw(false);
}

// Render the table according its current configuration
lxs.ui.Table.jQueryDataTable.prototype.render = function () {
    // Initialize UI table    
    if (!this._isInitialized()) {
        var self = this;
        this._initialize();
        var element = this._domManager.getElementById(this._getIdTable());
        this._table = element.DataTable({
            responsive: self.__options[lxs.ui.Table.jQueryDataTable.Options.RESPONSIVE],
            dom: '<"top"lf>t<"bottom"ip><"clear">',
            language: this._language.json,
            order: [],
            colReorder: self.__options[lxs.ui.Table.jQueryDataTable.Options.COL_REORDER],
            columns: self.__createDatatableColumns(),
            paging: self.__options[lxs.ui.Table.jQueryDataTable.Options.PAGING] != null ? self.__options[lxs.ui.Table.jQueryDataTable.Options.PAGING] : false,
            ordering: self.__options[lxs.ui.Table.jQueryDataTable.Options.ORDERING] != null ? self.__options[lxs.ui.Table.jQueryDataTable.Options.ORDERING] : false,
            searching: self.__options[lxs.ui.Table.jQueryDataTable.Options.SEARCHING] != null ? self.__options[lxs.ui.Table.jQueryDataTable.Options.SEARCHING] : false,
            info: self.__options[lxs.ui.Table.jQueryDataTable.Options.INFO] != null ? self.__options[lxs.ui.Table.jQueryDataTable.Options.INFO] : false,
            scrollX: self.__options[lxs.ui.Table.jQueryDataTable.Options.SCROLL_X] != null ? self.__options[lxs.ui.Table.jQueryDataTable.Options.SCROLL_X] : false,
            scrollY: self.__options[lxs.ui.Table.jQueryDataTable.Options.SCROLL_Y] != null ? self.__options[lxs.ui.Table.jQueryDataTable.Options.SCROLL_Y] : false,
            scrollCollapse: self.__options[lxs.ui.Table.jQueryDataTable.Options.SCROLL_COLLAPSE] != null ? self.__options[lxs.ui.Table.jQueryDataTable.Options.SCROLL_COLLAPSE] : false,
        });
    }

    // Call to the method of superclass
    lxs.ui.Table.prototype.render.call(this);

    // Refresh columns
    this.refresh();
}

// Enable or disable a feature
lxs.ui.Table.jQueryDataTable.prototype.setOption = function (option, flag) {
    this.__options[option] = flag;
}
;/*
    TableCell class
    Implementation of class that represents a cell table
*/

// Constructor
lxs.ui.Cell = function (data, column, domManager, formatter) {
    // Data and column of cell
    this.data = data;
    this.column = column;

    // Set DOM manager
    this._domManager = domManager;

    // Formatter of cell
    this.__formatter = this.column.formatter != null ? this.column.formatter : this.__createDefaultFormatter();

    // Html control
    this.__html = this.__createHTMLControl();

    // Actions
    this.__actions = {};
    if (this.column.click != null)
        this.__actions[lxs.dom.Events.CLICK] = this.column.click;
    if (this.column.mouseOver != null)
        this.__actions[lxs.dom.Events.MOUSEOVER] = this.column.mouseOver;
}

// Create the default formatter
lxs.ui.Cell.prototype.__createDefaultFormatter = function () {
    // Create action to format cell content    
    var self = this;
    var defaultActionFormatter = function (cell) {
        var value = self.column.location != null ? cell.getValueContent() : "";
        var span = self._domManager.createLabel(value);
        return span;
    }

    // Create and return formatter instance
    var defaultFormatter = new lxs.util.Formatter(defaultActionFormatter);
    return defaultFormatter;
}

// Return HTML control of the cell
lxs.ui.Cell.prototype.getHTMLControl = function () {
    return this.__html;
}

// Extract the value of the cell
lxs.ui.Cell.prototype.getValueContent = function () {
    if (this.column.location != null) {
        var locationParts = this.column.location.split(".");
        var path = this.data;
        for (var i = 0; i < locationParts.length; i++) {
            var locationPart = locationParts[i];
            if (path[locationPart] != null)
                path = path[locationPart];
            else
                return null;
        }
        return path;
    }
    else
        return null;
}

// Create function to execute when an event is triggered
lxs.ui.Cell.prototype.__getAction = function (event) {
    var self = this;
    return function () {
        var action = self.__actions[event];
        if (action != null)
            action(self);
    }
}

// Create the HTML of cell
lxs.ui.Cell.prototype.__createHTMLControl = function () {
    // Store current instance
    var self = this;

    // Create html from formatter
    var html = this.__formatter.apply(this);

    // Configure actions for each event    
    this._domManager.setAction(this.__getAction(lxs.dom.Events.CLICK), html, lxs.dom.Events.CLICK);
    this._domManager.setAction(this.__getAction(lxs.dom.Events.MOUSEOVER), html, lxs.dom.Events.MOUSEOVER);

    // Return html control
    return html;
}

// Set the action to be executed when cell is clicked
lxs.ui.Cell.prototype.setAction = function (action, event) {
    this.__actions[event] = action;
}

// Set the formatter of cell
lxs.ui.Cell.prototype.setFormatter = function (formatter) {
    this.__formatter = formatter;
}
;/*
    TablejQueryDataTableCustomizable class
    Implementation of table with jQuery DataTable library

    Requires: - jQuery
              - jQuery UI
              - jQuery Datatable

    Needs to: - implement function to save configuration
              - set function to save configuration with setSaveConfigurationAction method
*/

// Constructor
lxs.ui.Table.jQueryDataTableCustomizable = function (idDOMElement, configuration, language, titleVisualizationDialog, iconSaveConfiguration, iconChangeVisibilityColumns) {
    // Call to constructor of superclass
    lxs.ui.Table.jQueryDataTable.call(this, idDOMElement, configuration, language);

    // Variable that verify if column visibility dialog is active
    this.__visibilityDialogActive = false;

    // Function to execute when user wants to save configuration of the table
    this.__fnSaveConfiguration = function () { };

    // Set title to visualization dialog
    this.__titleVisualizationDialog = titleVisualizationDialog;

    // Set icons to default actions
    this.__iconSaveConfiguration = iconSaveConfiguration;
    this.__iconChangeVisibilityColumns = iconChangeVisibilityColumns;

    // Add default actions to the component
    this.__addDefaultActions();
}

// Constants
lxs.ui.Table.jQueryDataTableCustomizable.LANG_SAVECONFIGURATION = "SaveConfiguration";
lxs.ui.Table.jQueryDataTableCustomizable.LANG_SHOWHIDECOLUMNS = "ShowHideColumns";

// Inheritance
lxs.ui.Table.jQueryDataTableCustomizable.prototype = Object.create(lxs.ui.Table.jQueryDataTable.prototype);

// Add action to save configuration
lxs.ui.Table.jQueryDataTableCustomizable.prototype.__addSaveConfigurationAction = function () {
    var self = this;    
    var text = this._language.json.custom.saveConfiguration;
    this.addAction(text, this.__iconSaveConfiguration, function () { self.__fnSaveConfiguration(); });
}

// Add action to hide/show the columns
lxs.ui.Table.jQueryDataTableCustomizable.prototype.__addChangeVisualizationColumnsAction = function () {
    var self = this;
    var fnChangeVisualizationColumns = function () {
        if (!self.__visibilityDialogActive) {
            self.__visibilityDialogActive = true;
            var div = self.__createVisibilityColumnsDialog();
            self._domManager.setAttribute(div, "title", self.__titleVisualizationDialog)
            div.dialog();
            div.on("dialogclose", function (e) {
                self.__visibilityDialogActive = false;
            });
        }
    }
    var text = this._language.json.custom.showHideColumns;
    this.addAction(text, this.__iconChangeVisibilityColumns, fnChangeVisualizationColumns);
}

// Create dialog to manage columns visibility
lxs.ui.Table.jQueryDataTableCustomizable.prototype.__createVisibilityColumnsDialog = function () {
    // Create div with content of dialog
    var div = this._domManager.createElementByTag("div");

    // Definition of function that will be executed when a visibility checkbox is clicked
    var self = this;
    function cbVisibilityClick() {        
        var idColumn = this.value;        
        if (this.checked) {
            self.show(idColumn);
        }
        else {
            self.hide(idColumn);
        }
    }
    
    // Create a control visibility checkbox for each column
    var items = [];
    for (var i = 0; i < this._configuration.columns.length; i++) {
        var column = this._configuration.columns[i];
        var dtColumn = this.__getDatatableColumnById(column.id);
        var span = this._domManager.createElementByTag("span");
        var checkbox = this._domManager.createCheckbox(column.id);
        this._domManager.setStyle(checkbox, "vertical-align", "top");
        var label = this._domManager.createLabel(column.text);
        this._domManager.setStyle(label, "margin-left", "10px");
        this._domManager.setAttribute(checkbox, "checked", dtColumn.visible());
        this._domManager.append(span, checkbox);
        this._domManager.append(span, label);                
        this._domManager.setAction(cbVisibilityClick, checkbox, lxs.dom.Events.CLICK);        
        items.push(span);
    }

    // Create a list with items generated in the previous step
    var li = this._domManager.createList(items);

    // Append list to div to return
    div.append(li);
    
    // Return div
    return div;
}

// Add default actions to the component
lxs.ui.Table.jQueryDataTableCustomizable.prototype.__addDefaultActions = function () {
    this.__addSaveConfigurationAction();
    this.__addChangeVisualizationColumnsAction();
}

// Set function to execute to save configuration
lxs.ui.Table.jQueryDataTableCustomizable.prototype.setSaveConfigurationAction = function (fn) {
    this.__fnSaveConfiguration = fn;
}
;/*    
    Chart class
    Implementation of generic chart

    An configuration example:
        { data: [ { timestamp: "10-12-2015", total: 8, average: 4 }, { timestamp: "10-14-2012", total: 4, average: 2 }, { timestamp: "10-15-2012", total: 17, average: 7 } ],
          charts: [ { id: "total", title: "Total", labelLocation: "timestamp", valueLocation: "total" },
                    { id: "average", title: "Average", labelLocation: "timestamp", valueLocation: "average" } ]
          title: "Text" }
*/

// Constructor
lxs.ui.Chart = function (idDOMElement, configuration, domManager) {
    this._idDOMElement = idDOMElement;
    this._configuration = configuration;
    this._domManager = domManager;
}

// Create formatter to display a value of variable from data
lxs.ui.Chart.prototype._createDefaultFormatter = function (location) {
    // Store current instance
    var self = this;
    
    // Create function to get value from location
    var defaultActionFormatter = function (data) {
        var value = self._getValueFromLocation(data, location);        
        return value;
    }

    // Create and return formatter
    var defaultFormatter = new lxs.util.Formatter(defaultActionFormatter);
    return defaultFormatter;
}

// Get value of data from variable location
// For example:
//   data = { label: 'Prize', prize: { dollar: 50, euros: 40 }
//   location = "prize.dollar";
lxs.ui.Chart.prototype._getValueFromLocation = function (data, location) {
    var locationParts = location.split(".");
    var path = data;
    for (var i = 0; i < locationParts.length; i++) {
        var locationPart = locationParts[i];
        path = path[locationPart];
    }
    var value = path;
    return value;
}

// Get all labels of chart
lxs.ui.Chart.prototype._getLabels = function () {
    // Create labels list to return
    var labels = [];

    // Iteration over all chart items
    for (var i = 0; i < this._configuration.charts.length; i++) {
        // Get chart item
        var chartItem = this._configuration.charts[i];

        // Get formatter for current chart item
        var formatter = chartItem.labelFormatter != null ? chartItem.labelFormatter : this._createDefaultFormatter(chartItem.labelLocation)

        // Extract all labels of chart item from data
        for (var j = 0; j < this._configuration.data.length; j++) {
            var data = this._configuration.data[j];
            var label = formatter.apply(data);
            if (!labels.includes(label)) {
                labels.push(label);
            }
        }
    }

    // Order labels
    var arrayLabels = new lxs.util.Array(labels);
    if (arrayLabels.isNumeric())
        labels.sort(function (a, b) { return a - b });
    else
        labels.sort();

    // Return labels
    return labels;
}

// Search and return the chart item with id passed as parameter
lxs.ui.Chart.prototype._getChartItemById = function (id) {
    for (var i = 0; i < this._configuration.charts.length; i++) {
        var chartItem = this._configuration.charts[i];
        if (chartItem.id == id) {
            return chartItem;
        }
    }
    return null;
}

// Get record from data by label
lxs.ui.Chart.prototype._getRecordByLabel = function (id, label) {
    // Get chart item with id passed as parameter
    var chartItem = this._getChartItemById(id);

    // Create formatters for labels and values
    var labelFormatter = chartItem.labelFormatter != null ? chartItem.labelFormatter : this._createDefaultFormatter(chartItem.labelLocation)
    var valueFormatter = chartItem.valueFormatter != null ? chartItem.valueFormatter : this._createDefaultFormatter(chartItem.valueLocation)

    // Iteration over data to find record with label passed as parameter
    for (var i = 0; i < this._configuration.data.length; i++) {
        var record = this._configuration.data[i];
        var labelItem = labelFormatter.apply(record);
        if (label == labelItem)
        {
            return record;
        }
    }

    // Return null if data doesn't contain label
    return null;
}

// Get index of a label
lxs.ui.Chart.prototype.getIndexLabel = function (label) {
    var labels = this._getLabels();
    for (var i = 0; i < labels.length; i++) {
        var labelItem = labels[i];
        if (labelItem == label)
            return i;
    }
    return -1;
}

// Get index of a element by attribute
lxs.ui.Chart.prototype.getIndexElementByAttribute = function (id, attribute, value) {
    var chartItem = this._getChartItemById(id);
    var labelFormatter = chartItem.labelFormatter != null ? chartItem.labelFormatter : this._createDefaultFormatter(chartItem.labelLocation);
    for (var i = 0; i < this._configuration.data.length; i++) {
        var record = this._configuration.data[i];
        var attributeValue = this._getValueFromLocation(record, attribute);
        if (attributeValue == value) {
            var label = labelFormatter.apply(record);
            var indexLabel = this.getIndexLabel(label);
            return indexLabel;
        }
    }
    return -1;
}

// Get value from data with id and label passed as parameter
lxs.ui.Chart.prototype._getValue = function (id, label) {
    // Get record from data with id and label passed as parameter
    var record = this._getRecordByLabel(id, label);

    // Verify if data contains record
    if (record != null) {
        // Get chart item with id passed as parameter
        var chartItem = this._getChartItemById(id);

        // Create formatters for values    
        var valueFormatter = chartItem.valueFormatter != null ? chartItem.valueFormatter : this._createDefaultFormatter(chartItem.valueLocation)

        // Extract value from record
        var valueItem = valueFormatter.apply(record);

        // Return value
        return valueItem;
    }
    else {
        // Return null if data doesn't contain record
        return null;
    }
    
}

// Get set of values of chart item with id passed as parameter
lxs.ui.Chart.prototype._getValuesSet = function (id) {
    var values = [];
    var labels = this._getLabels();
    for (var i = 0; i < labels.length; i++) {
        var label = labels[i];
        var value = this._getValue(id, label);
        values.push(value);
    }
    return values;
}

// Get maximum value
lxs.ui.Chart.prototype._getMaximumValue = function (id) {
    var max = Number.MIN_SAFE_INTEGER;
    var values = this._getValuesSet(id);
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (value > max)
            max = value;
    }
    return max;
}

// Get minimum value
lxs.ui.Chart.prototype._getMinimumValue = function (id) {
    var min = Number.MAX_SAFE_INTEGER;
    var values = this._getValuesSet(id);
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (value < min)
            min = value;
    }
    return min;
}
;;/*    
    ChartJS class
    Implementation of chart with Chart.js
*/

lxs.ui.Chart.ChartJS = function (idDOMElement, configuration) {
    // Call to constructor of superclass
    lxs.ui.Chart.call(this, idDOMElement, configuration, new lxs.dom.DOMManagerjQuery());
}

// Inheritance
lxs.ui.Chart.ChartJS.prototype = Object.create(lxs.ui.Chart.prototype);

// Constants
lxs.ui.Chart.ChartJS.TOOLTIP = {};
lxs.ui.Chart.ChartJS.TOOLTIP.TITLE = 0;
lxs.ui.Chart.ChartJS.TOOLTIP.LABEL = 1;

// Update chart data
lxs.ui.Chart.ChartJS.prototype.updateData = function (data) {
    this._configuration.data = data;
}

// Update label of a chart item
lxs.ui.Chart.ChartJS.prototype.updateLabel = function (chartItemId, label) {
    this._configuration.charts[chartItemId].title = label;
}

// Create chart datasets from configuration
lxs.ui.Chart.ChartJS.prototype._createChartDatasets = function () {
    var chartsDatasets = [];
    var self = this;
    for (var i = 0; i < this._configuration.charts.length; i++) {
        var chartItem = this._configuration.charts[i];
        var chartDataset = {
            label: chartItem.title,
            clickAction: chartItem.click,
            mouseOverAction: chartItem.mouseOver,
            borderColor: chartItem.color,
            borderWidth: chartItem.width != null ? chartItem.width : 1,
            backgroundColor: chartItem.color,
            fill: false,
            data: self._getValuesSet(chartItem.id),
            yAxisID: chartItem.id,
            pointRadius: chartItem.sizePoint != null ? chartItem.sizePoint : 0
        }
        chartsDatasets.push(chartDataset);
    }
    return chartsDatasets;
}

// Create ticks for a chartitem
lxs.ui.Chart.ChartJS.prototype._createTicks = function (chartItem) {
    // Create ticks
    var ticks = {};
    if (chartItem.ticks != null) {
        if (chartItem.ticks.minValue != null)
            ticks.min = chartItem.ticks.minValue;
        if (chartItem.ticks.maxValue != null)
            ticks.max = chartItem.ticks.maxValue;
        if (chartItem.ticks.step != null)
            ticks.stepSize = chartItem.ticks.step;
    }
    else {
        if (chartItem.range != null) {
            if (chartItem.range.minValue != null) {
                var min = this._getMinimumValue(chartItem.id);
                if (chartItem.range.minValue < min)
                    ticks.min = chartItem.range.minValue;
            }
            if (chartItem.range.maxValue != null) {
                var max = this._getMaximumValue(chartItem.id);
                if (chartItem.range.maxValue > max)
                    ticks.max = chartItem.range.maxValue;
            }
        }
    }

    // Return ticks
    return ticks;
}

// Create x axes for chart
lxs.ui.Chart.ChartJS.prototype._createXAxes = function () {
    var self = this;
    var xAxes = [{
        type: self._configuration.labelType != null ? self._configuration.labelType : "category",
        categoryPercentage: 1,
        barPercentage: 0.1,
        ticks: {
            maxRotation: self._configuration.xLabelRotation != null ? self._configuration.xLabelRotation : 0,
            minRotation: self._configuration.xLabelRotation != null ? self._configuration.xLabelRotation : 0
        },
        scaleLabel: {
            display: self._configuration.labelXTitle != null,
            labelString: self._configuration.labelXTitle
        }
    }];
    return xAxes;
}

// Create y axes for chart
lxs.ui.Chart.ChartJS.prototype._createYAxes = function () {
    // Create axes list to return
    var yAxes = [];

    // Define axes for every chart    
    for (var i = 0; i < this._configuration.charts.length; i++) {
        // Get chart item
        var chartItem = this._configuration.charts[i];

        // Define ticks configuration
        var ticks = this._createTicks(chartItem);

        // Definition of y axe
        var yAxe = {
            id: chartItem.id,
            type: "linear",
            display: true,
            position: "left",
            ticks: ticks,
            scaleLabel: {
                display: chartItem.labelYTitle != null,
                labelString: chartItem.labelYTitle
            }
        }
        yAxes.push(yAxe);
    }

    // Return axes
    return yAxes;
}

// Get chart dataset by id
lxs.ui.Chart.ChartJS.prototype._getDatasetById = function (id) {
    var datasets = this._chart.config.data.datasets;
    for (var i = 0; i < datasets.length; i++) {
        var dataset = datasets[i];
        if (dataset.yAxisID == id)
            return dataset;
    }
    return null;
}

// Get index chart dataset by id
lxs.ui.Chart.ChartJS.prototype._getDatasetIndexById = function (id) {
    var datasets = this._chart.config.data.datasets;
    for (var i = 0; i < datasets.length; i++) {
        var dataset = datasets[i];
        if (dataset.yAxisID == id)
            return i;
    }
    return -1;
}

// Get tooltip from a tooltip item
lxs.ui.Chart.ChartJS.prototype.__getTooltip = function (tooltipItem, data, tooltipType) {
    // Set tooltip by default
    var tooltip;
    if (tooltipType == lxs.ui.Chart.ChartJS.TOOLTIP.TITLE)
        tooltip = tooltipItem.xLabel;
    else
        tooltip = tooltipItem.yLabel;

    // Get ID of data item
    var datasetIndex = tooltipItem.datasetIndex;
    var dataItemId = data.datasets[datasetIndex].yAxisID;

    // Get chart item by ID
    var chartItem = this._getChartItemById(dataItemId);

    // Verify if chartItem has tooltip defined
    if (chartItem.tooltip != null) {
        // Get record by tooltip label
        var label = tooltipItem.xLabel;
        var record = this._getRecordByLabel(dataItemId, label);

        // Apply the formatter specified by type
        if (tooltipType == lxs.ui.Chart.ChartJS.TOOLTIP.TITLE && chartItem.tooltip.formatterTitle != null)
            tooltip = chartItem.tooltip.formatterTitle.apply(record);
        if (tooltipType == lxs.ui.Chart.ChartJS.TOOLTIP.LABEL && chartItem.tooltip.formatterLabel != null)
            tooltip = chartItem.tooltip.formatterLabel.apply(record);
    }

    // Return tooltip generated
    return tooltip;
}

// Create chart instance from configuration
lxs.ui.Chart.ChartJS.prototype._createChart = function (datasets, xAxes, yAxes) {
    // Store current instance
    var self = this;

    // Get canvas element where chart will be rendered
    var ctx = this._domManager.getContextById(this._idDOMElement);

    // Create chart
    var chart = new Chart(ctx, {
        type: self._type,
        data: {
            labels: self._getLabels(),
            datasets: datasets
        },
        constantsLines: self._configuration.constantsLines,
        options: {
            title: {
                display: true,
                text: self._configuration.title
            },
            responsive: true,
            stacked: false,
            hoverMode: "index",
            maintainAspectRatio: false,
            scales: {
                xAxes: xAxes,
                yAxes: yAxes
            },
            animation: {
                onComplete: self._configuration.onComplete
            }
        }
    });

    // Set tooltip template
    chart.options.tooltips.callbacks.title = function (tooltipItems, data) {
        return self.__getTooltip(tooltipItems[0], data, lxs.ui.Chart.ChartJS.TOOLTIP.TITLE);
    }
    chart.options.tooltips.callbacks.label = function (tooltipItem, data) {
        return self.__getTooltip(tooltipItem, data, lxs.ui.Chart.ChartJS.TOOLTIP.LABEL);
    }

    // Return chart
    return chart;
}

// Redraw the chart
lxs.ui.Chart.ChartJS.prototype.redraw = function () {
    this._chart.update(0);
}

// Retrieve action of dataset related to an event
lxs.ui.Chart.ChartJS.prototype._getAction = function (dataset, eventType) {
    var action;
    if (eventType == lxs.dom.Events.CLICK)
        action = dataset.clickAction;
    else if (eventType == lxs.dom.Events.MOUSE_MOVE)
        action = dataset.mouseOverAction;
    else
        action = null;
    return action;
}

// Configure action to be executed when an event is fired on chart
lxs.ui.Chart.ChartJS.prototype._configureActionEvent = function (eventType) {
    // Store current instance
    var self = this;

    // Definition of action that will be executed    
    var action = function (evt) {
        // Get element clicked from event
        var element = self._chart.getElementAtEvent(evt);

        // If element is not empty...
        if (element.length > 0) {
            // Get dataset
            element = element[0];
            var datasetIndex = element._datasetIndex;
            var dataset = element._chart.config.data.datasets[datasetIndex];

            // Get action related to dataset clicked
            var action = self._getAction(dataset, eventType);

            // If action is defined...
            if (action != null) {
                // Get record related to value clicked
                var index = element._index;
                var labels = element._chart.config.data.labels;
                var label = labels[index];
                var itemId = dataset.yAxisID;
                var record = self._getRecordByLabel(itemId, label);

                // Execute action
                action(record);
            }
        }
        else {
            var datasets = self._chart.config.data.datasets;;
            for (var i = 0; i < datasets.length; i++) {
                var dataset = datasets[i];
                var action = self._getAction(dataset, eventType);
                if (action != null) {
                    action(null);
                }
            }
        }
    }

    // Configure event
    var canvas = this._domManager.getElementById(this._idDOMElement);
    this._domManager.setAction(action, canvas, eventType);
}

// Configure chart events
lxs.ui.Chart.ChartJS.prototype._configureEvents = function () {
    this._configureActionEvent(lxs.dom.Events.CLICK);
    this._configureActionEvent(lxs.dom.Events.MOUSE_MOVE);
}

// Get axis by chartitem id
lxs.ui.Chart.ChartJS.prototype._getYAxe = function (id) {
    var yAxes = this._chart.options.scales.yAxes;
    for (var i = 0; i < yAxes.length; i++) {
        var yAxe = yAxes[i];
        if (yAxe.id == id) {
            return yAxe;
        }
    }
    return null;
}

// Update ticks from chart items configuration
lxs.ui.Chart.ChartJS.prototype._updateTicks = function () {
    // Iterate over all chart items
    for (var i = 0; i < this._configuration.charts.length; i++) {
        // Get chart item
        var chartItem = this._configuration.charts[i];

        // Create ticks for chart item
        var ticks = this._createTicks(chartItem);

        // Get y axe by chartitem id
        var yAxe = this._getYAxe(chartItem.id);

        // Update ticks values
        yAxe.ticks.min = ticks.min;
        yAxe.ticks.max = ticks.max;
        yAxe.ticks.step = ticks.step;
    }
}

// Render chart from current configuration
lxs.ui.Chart.ChartJS.prototype.render = function () {
    // Store current instance
    var self = this;

    // Create chart datasets
    var datasets = this._createChartDatasets();

    // Configure axes
    var xAxes = this._createXAxes();
    var yAxes = this._createYAxes();

    // If chart instance is not created...
    if (this._chart == null) {
        // Create chart instance
        this._chart = this._createChart(datasets, xAxes, yAxes);

        // Configure chart events
        this._configureEvents();
    }
    else {
        // Update data for chart
        this._chart.data.labels = self._getLabels();
        this._chart.data.datasets = datasets;

        // Update ticks
        this._updateTicks();
    }

    // Update chart
    this._chart.update();
}
;/*    
    ChartJSLines class
    Implementation of line chart with Chart.js
*/

lxs.ui.Chart.ChartJSLine = function (idDOMElement, configuration) {
    // Definition of type of chart
    this._type = "LineWithConstants";

    // Call to constructor of superclass
    lxs.ui.Chart.ChartJS.call(this, idDOMElement, configuration);

    // Create chart line with constants type
    lxs.ui.Chart.ChartJSLine.__createChartLineWithConstantsType();

    // Attribute to store highlighted elements by chart item
    this.__highlightedPoints = {};

    // Store current instance
    var self = this;
}

// Inheritance
lxs.ui.Chart.ChartJSLine.prototype = Object.create(lxs.ui.Chart.ChartJS.prototype);

// Constants
lxs.ui.Chart.ChartJSLine.DEFAULT_CONSTANTS_LINES_COLOR = "#FF0000";
lxs.ui.Chart.ChartJSLine.DEFAULT_HIGHLIGHT_BACKGROUND_COLOR = "#FFFF00";
lxs.ui.Chart.ChartJSLine.DEFAULT_HIGHLIGHT_BORDER_COLOR = "#000000";
lxs.ui.Chart.ChartJSLine.DEFAULT_HIGHLIGHT_RADIUS_COLOR = 4;

// Apply highlight style to an element
lxs.ui.Chart.ChartJSLine.prototype.__applyHighlightStyleToElement = function (element) {
    element._view.radius = lxs.ui.Chart.ChartJSLine.DEFAULT_HIGHLIGHT_RADIUS_COLOR;
    element._view.backgroundColor = this._configuration.highlightBackgroundColor != null ? this._configuration.highlightBackgroundColor : lxs.ui.Chart.ChartJSLine.DEFAULT_HIGHLIGHT_BACKGROUND_COLOR;
    element._view.borderColor = this._configuration.highlightBorderColor != null ? this._configuration.highlightBorderColor : lxs.ui.Chart.ChartJSLine.DEFAULT_HIGHLIGHT_BORDER_COLOR;
}

// Apply normal style to an element
lxs.ui.Chart.ChartJSLine.prototype.__applyNormalStyleToElement = function (element) {
    element._view.radius = 0;
    element._view.backgroundColor = "#000000";
    element._view.borderColor = "#000000";
}

// Apply highlight style to a dataset
lxs.ui.Chart.ChartJSLine.prototype.__applyHighlightStyleToDataset = function (dataset) {
    dataset.pointRadius = lxs.ui.Chart.ChartJSLine.DEFAULT_HIGHLIGHT_RADIUS_COLOR;
    dataset.backgroundColor = this._configuration.highlightBackgroundColor != null ? this._configuration.highlightBackgroundColor : lxs.ui.Chart.ChartJSLine.DEFAULT_HIGHLIGHT_BACKGROUND_COLOR;
    dataset.borderColor = this._configuration.highlightBorderColor != null ? this._configuration.highlightBorderColor : lxs.ui.Chart.ChartJSLine.DEFAULT_HIGHLIGHT_BORDER_COLOR;
}

// Apply normal style to a dataset
lxs.ui.Chart.ChartJSLine.prototype.__applyNormalStyleToDataset = function (dataset) {
    dataset.pointRadius = 0;
    dataset.backgroundColor = "#000000";
    dataset.borderColor = "#000000";
}

// Set highlight for a point of chart
lxs.ui.Chart.ChartJSLine.prototype.highlightPoint = function (datasetId, index) {
    var datasetIndex = this._getDatasetIndexById(datasetId);
    var meta = this._chart.getDatasetMeta(datasetIndex);
    var element = meta.data[index];
    if (element != null) {
        if (this.__highlightedPoints[datasetIndex] == null)
            this.__highlightedPoints[datasetIndex] = [];
        this.__highlightedPoints[datasetIndex].push(index);
        this.__applyHighlightStyleToElement(element);
        element.draw();
    }
}

// Remove all highlighted points of chart
lxs.ui.Chart.ChartJSLine.prototype.removeHighlightedPoints = function (datasetId) {
    var dataset = this._getDatasetById(datasetId);
    var datasetIndex = this._getDatasetIndexById(datasetId);
    this.__applyNormalStyleToDataset(dataset);
    this.redraw();
    this.__highlightedPoints[datasetIndex] = [];
}

// Create chart instance from configuration
lxs.ui.Chart.ChartJSLine.prototype._createChart = function (datasets, xAxes, yAxes) {
    // Call to superclass method
    var chart = lxs.ui.Chart.ChartJS.prototype._createChart.call(this, datasets, xAxes, yAxes);

    // Store current instance
    var self = this;

    // Configure hover event to preserve highlighted points
    chart.options.hover.onHover = function (evt, elements) {
        var datasets = this.config.data.datasets;
        for (var i = 0; i < datasets.length; i++) {
            var datasetMeta = this.getDatasetMeta(i);
            var elements = datasetMeta.data;
            for (var j = 0; j < elements.length; j++) {
                var element = elements[j];
                if (self.__highlightedPoints[i] != null && self.__highlightedPoints[i].includes(element._index)) {
                    self.__applyHighlightStyleToElement(element);
                }
                else {
                    self.__applyNormalStyleToElement(element);
                }
                element.draw();
            }
        }

    }

    // Return chart instance
    return chart;
}

// Render chart from current configuration
lxs.ui.Chart.ChartJSLine.prototype.render = function () {
    lxs.ui.Chart.ChartJS.prototype.render.call(this);
}

// Extends chart controllers to add chart line with constants type
lxs.ui.Chart.ChartJSLine.__createChartLineWithConstantsType = function () {
    if (Chart.controllers.LineWithConstants == null) {
        Chart.controllers.LineWithConstants = Chart.controllers.line.extend({
            initialize: function () {
                Chart.controllers.line.prototype.initialize.apply(this, arguments);
            },
            draw: function () {
                // Call superclass method
                Chart.controllers.line.prototype.draw.apply(this, arguments);

                // Verify if configuration has constants lines
                if (this.chart.config.constantsLines != null) {
                    // Get x and y axis
                    var xAxisId = this.chart.config.options.scales.xAxes[0].id;
                    var yAxisId = this.chart.config.options.scales.yAxes[0].id;
                    var xAxis = this.chart.scales[xAxisId];
                    var yAxis = this.chart.scales[yAxisId];

                    // For every constant line...
                    for (var i = 0; i < this.chart.config.constantsLines.length; i++) {
                        // Get constant definition from chart configuration
                        var constantLine = this.chart.config.constantsLines[i];

                        // Get attributes from constante definition
                        var constantValue = constantLine.value;
                        var lineColor = constantLine.color != null ? constantLine.color : lxs.ui.Chart.ChartJSLine.DEFAULT_CONSTANTS_LINES_COLOR;

                        // Draw a line with constant value in chart
                        this.chart.chart.ctx.save();
                        this.chart.chart.ctx.beginPath();
                        this.chart.chart.ctx.moveTo(xAxis.left, yAxis.getPixelForValue(constantValue, undefined));
                        this.chart.chart.ctx.strokeStyle = lineColor;
                        this.chart.chart.ctx.lineWidth = 1;
                        this.chart.chart.ctx.lineTo(xAxis.right, yAxis.getPixelForValue(constantValue, undefined));
                        this.chart.chart.ctx.stroke();
                        this.chart.chart.ctx.restore();
                    }
                }
            }
        });
    }
};/*    
    ChartJSBar class
    Implementation of bar chart with Chart.js
*/

lxs.ui.Chart.ChartJSBar = function (idDOMElement, configuration) {
    // Definition of chart type
    this._type = "bar";
    
    // Call to constructor of superclass
    lxs.ui.Chart.ChartJS.call(this, idDOMElement, configuration);
}

// Inheritance
lxs.ui.Chart.ChartJSBar.prototype = Object.create(lxs.ui.Chart.ChartJS.prototype);
;;/*    
    ChartJSPie class
    Implementation of pie chart with Chart.js
*/

lxs.ui.Chart.ChartJSPie = function (idDOMElement, configuration) {
    // Definition of chart type
    this._type = "pie";

    // Call to constructor of superclass
    lxs.ui.Chart.ChartJS.call(this, idDOMElement, configuration);
}

lxs.ui.Chart.ChartJSPie.prototype = Object.create(lxs.ui.Chart.ChartJS.prototype);

lxs.ui.Chart.ChartJSPie.prototype._createXAxes = function () {
    // No axes in pie charts
    return [];
}

lxs.ui.Chart.ChartJSPie.prototype._createYAxes = function () {
    // No axes in pie charts
    return [];
}

// Get tooltip from a tooltip item
lxs.ui.Chart.ChartJSPie.prototype.__getTooltip = function (tooltipItem, data, tooltipType) {
    // Get ID of data item
    var datasetIndex = tooltipItem.datasetIndex;
    var dataItemId = data.datasets[datasetIndex].yAxisID;

    // Get chart item by ID
    var chartItem = this._getChartItemById(dataItemId);

    // Verify if chartItem has tooltip defined
    if (chartItem.tooltip != null) {
        // Get record by tooltip label
        var index = tooltipItem.index;
        var label = data.labels[index];
        var record = this._getRecordByLabel(dataItemId, label);

        // Apply the formatter specified by type
        if (tooltipType == lxs.ui.Chart.ChartJS.TOOLTIP.TITLE && chartItem.tooltip.formatterTitle != null)
            tooltip = chartItem.tooltip.formatterTitle.apply(record);
        if (tooltipType == lxs.ui.Chart.ChartJS.TOOLTIP.LABEL && chartItem.tooltip.formatterLabel != null)
            tooltip = chartItem.tooltip.formatterLabel.apply(record);
    }

    // Return tooltip generated
    return tooltip;
};/*
    WaitWindow (abstract) class
    Implementation of element to display for waiting
*/

lxs.ui.WaitWindow = function (domManager) {
	this._domManager = domManager;
}

lxs.ui.WaitWindow.prototype.show = function () {
	throw new lxs.Exception.MethodNotImplemented();
}

lxs.ui.WaitWindow.prototype.hide = function () {
	throw new lxs.Exception.MethodNotImplemented();
}
;/*
    jQueryWaitWindow (abstract) class
    Implementation of element to display for waiting using jQuery
*/

lxs.ui.WaitWindow.jQueryWaitWindow = function (img) {
    lxs.ui.WaitWindow.call(this, new lxs.dom.DOMManagerjQuery());
    this._waitElement = this.__createWaitElement(img);
    this.__initBody();
}

lxs.ui.WaitWindow.jQueryWaitWindow.prototype = Object.create(lxs.ui.WaitWindow.prototype);

lxs.ui.WaitWindow.jQueryWaitWindow.DOM_ELEMENT_ID = "lxscorejquerywaitwindow";

lxs.ui.WaitWindow.jQueryWaitWindow.prototype.__createWaitElement = function (img) {
    var waitElement = this._domManager.createElementByTag("div");
    this._domManager.setAttribute(waitElement, "id", lxs.ui.WaitWindow.jQueryWaitWindow.DOM_ELEMENT_ID);
    this._domManager.setStyle(waitElement, "display", "none");
    this._domManager.setStyle(waitElement, "position", "fixed");
    this._domManager.setStyle(waitElement, "z-index", "1000");
    this._domManager.setStyle(waitElement, "top", "0");
    this._domManager.setStyle(waitElement, "left", "0");
    this._domManager.setStyle(waitElement, "height", "100%");
    this._domManager.setStyle(waitElement, "width", "100%");
    this._domManager.setStyle(waitElement, "background-color", "rgba(255, 255, 255, .8)");
    this._domManager.setStyle(waitElement, "background-image", "url('" + img + "')");
    this._domManager.setStyle(waitElement, "background-repeat", "no-repeat");
    this._domManager.setStyle(waitElement, "background-position-x", "50%");
    this._domManager.setStyle(waitElement, "background-position-y", "50%");
    return waitElement;
}

lxs.ui.WaitWindow.jQueryWaitWindow.prototype.__initBody = function () {
    if (!this._domManager.exists(lxs.ui.WaitWindow.DOM_ELEMENT_ID)) {
        var body = this._domManager.getElementsByTag("body");
        this._domManager.append(body, this._waitElement);
    }
}

lxs.ui.WaitWindow.jQueryWaitWindow.prototype.show = function () {        
    this._domManager.setStyle(this._waitElement, "display", "block");
}

lxs.ui.WaitWindow.jQueryWaitWindow.prototype.hide = function () {
    this._domManager.setStyle(this._waitElement, "display", "none");
}
;
// GIS events
lxs.gis.Events = {};
lxs.gis.Events.CLICK = 0;
lxs.gis.Events.MOUSE_MOVE = 1;
lxs.gis.Events.MOUSE_DRAG = 2;
lxs.gis.Events.ZOOM_LEVEL_CHANGE = 3;

// Geometries
lxs.gis.Geometry = {};
lxs.gis.Geometry.POINT = 0;
lxs.gis.Geometry.LINE = 1;

// Projections
lxs.gis.Projection = {};
lxs.gis.Projection.WGS_84 = 0;
lxs.gis.Projection.ED_50 = 1;
lxs.gis.Projection.ETRS_89_30 = 2;

// Get the EPSG code for a projection
lxs.gis.Projection.getEPSG = function (prj) {
    switch (prj) {
        case lxs.gis.Projection.WGS_84: return "3857";
        case lxs.gis.Projection.ED_50: return "4230";
        case lxs.gis.Projection.ETRS_89_30: return "25830";
        default: return null;
    }
}

// Get the SRS code for a projection
lxs.gis.Projection.getSRS = function (prj) {
    return "EPSG:" + lxs.gis.Projection.getEPSG(prj);
}

// Static method to verify if an extent is valid
lxs.gis.isValidExtent = function (extent) {
    return (extent != null && extent.length == 4 &&
            !Number.isNaN(extent[0]) && !Number.isNaN(extent[1]) && !Number.isNaN(extent[2]) && !Number.isNaN(extent[3]) &&
            Number.isFinite(extent[0]) && Number.isFinite(extent[1]) && Number.isFinite(extent[2]) && Number.isFinite(extent[3]))
}
;// Definition of namespace for openlayers components
lxs.gis.openlayers = {};

// Definition of default styles values
lxs.gis.openlayers.DefaultStyles = {};
lxs.gis.openlayers.DefaultStyles.MARKER_DEFAULT_FILL_COLOR = "yellow";
lxs.gis.openlayers.DefaultStyles.MARKER_DEFAULT_STROKE_COLOR = "black";
lxs.gis.openlayers.DefaultStyles.MARKER_DEFAULT_STROKE_WIDTH = 2;
lxs.gis.openlayers.DefaultStyles.CLUSTER_ONE_FEATURE_DEFAULT_FILL_COLOR = "#000";
lxs.gis.openlayers.DefaultStyles.CLUSTER_ONE_FEATURE_DEFAULT_STROKE_COLOR = "#65f442";
lxs.gis.openlayers.DefaultStyles.CLUSTER_DEFAULT_FILL_COLOR = "#fff";
lxs.gis.openlayers.DefaultStyles.CLUSTER_DEFAULT_STROKE_COLOR = "#3399CC";
lxs.gis.openlayers.DefaultStyles.CLUSTER_DEFAULT_TEXT_COLOR = "#fff";

// Static method
// Set stroke color to a element
lxs.gis.openlayers.__setStrokeColor = function (element, color) {
    var currentStyle = element.getStyle() != null ? this.__olFeature.getStyle() : new ol.style.Style();
    var stroke = currentStyle.getStroke() != null ? currentStyle.getStroke() : new ol.style.Stroke({});
    stroke.setColor(color);
    currentStyle.setStroke(stroke);
    element.setStyle(currentStyle);
}

// Static method
// Set fill color to a element
lxs.gis.openlayers.__setFillColor = function (element, color) {
    var currentStyle = element.getStyle() != null ? this.__olFeature.getStyle() : new ol.style.Style();
    var fill = currentStyle.getFill() != null ? currentStyle.getFill() : new ol.style.Fill({});
    fill.setColor(color);
    currentStyle.setFill(fill);
    element.setStyle(currentStyle);
};
/*
    Map class
*/

lxs.gis.openlayers.Map = function (div, initialExtent, projection) {
    // Class attributes
    this.__div = div;
    this.__layers = [];
    this.__baseLayers = [];

    // Store current instance
    var self = this;

    // Create markers layer        
    this.__olMarkersLayer = new ol.layer.Vector({
        source: new ol.source.Vector({})
    });
    this.__olMarkersLayer.setZIndex(9999);

    // Get projection
    projection = (projection != null) ? projection : lxs.gis.Projection.WGS_84;

    // Map instance
    this.__olMap = new ol.Map({
        target: div,
        layers: [
           self.__olMarkersLayer
        ],
        view: new ol.View({
            projection: lxs.gis.Projection.getSRS(projection)
        })
    });

    // Configure tooltips area
    this.__configureTooltips();

    // Set initial view
    if (lxs.gis.isValidExtent(initialExtent))
        this.setExtent(initialExtent);

    // Initialize variable to store interactor
    this.__drawInteractor = null;

    // List of actions for every event
    this._actions = {};

    // Initialize current tooltip
    this.__currentTooltip = null;

    // Configure actions to show tooltips
    this.__configureTooltips();

    // Configure map events
    this.__configureEvents();
}

// Constants
lxs.gis.openlayers.Map.TOOLTIP_DIV = "tooltipMap";

// Map modes
lxs.gis.openlayers.Map.DRAWING_MODE = {}
lxs.gis.openlayers.Map.DRAWING_MODE.RECTANGLE = 0
lxs.gis.openlayers.Map.DRAWING_MODE.POLYGON = 1

// Assign an action to an event
lxs.gis.openlayers.Map.prototype.setAction = function (event, fn) {
    this._actions[event] = fn;
}

// Get action related to an event
lxs.gis.openlayers.Map.prototype.getAction = function (event) {
    return this._actions[event];
}

// Configure action to be executed to show tooltips
lxs.gis.openlayers.Map.prototype.__configureTooltips = function () {
    // Store current instance
    var self = this;

    // Add div for tooltips in map
    this.__tooltip = document.createElement("div");
    this.__tooltip.setAttribute("id", lxs.gis.openlayers.Map.TOOLTIP_DIV);
    var divMap = document.getElementById(this.__div);
    divMap.appendChild(this.__tooltip);

    // Create overlay
    this.__olTooltipOverlay = new ol.Overlay({
        element: document.getElementById(lxs.gis.openlayers.Map.TOOLTIP_DIV),
        offset: [10, 0],
        positioning: 'bottom-left'
    });
    this.__olMap.addOverlay(this.__olTooltipOverlay);
}

// Get openlayers event descriptor for event passed as parameter
lxs.gis.openlayers.Map.prototype.__getOlEvent = function (event) {
    var olEvent;
    if (event == lxs.gis.Events.CLICK)
        olEvent = "click";
    else if (event == lxs.gis.Events.MOUSE_MOVE)
        olEvent = "pointer_over";
    else if (event == lxs.gis.Events.POINTER_MOVE)
        olEvent = "pointermove";
    else
        olEvent = null;
    return olEvent;
}

// Configure a generic event for map
lxs.gis.openlayers.Map.prototype.__configureEvent = function (event) {
    // Store current instance
    var self = this;

    // Get event descriptor
    var olEvent = this.__getOlEvent(event);

    // Configure event
    var layerFeatures = {};
    this.__olMap.on(olEvent, function (evt) {
        // Hide current tooltip
        if ((event == lxs.gis.Events.POINTER_MOVE || event == lxs.gis.Events.CLICK) && self.__currentTooltip != null) {
            self.__currentTooltip.hide(document.getElementById(lxs.gis.openlayers.Map.TOOLTIP_DIV));
            self.__currentTooltip = null;
        }

        // Execute action map
        var actionMap = self._actions[event];
        if (actionMap != null)
            actionMap();

        // Execute actions layers
        var pixel = evt.pixel;
        self.__olMap.forEachFeatureAtPixel(pixel, function (olFeature, olLayer) {
            if (olLayer != null) {
                var id = olLayer.get(lxs.gis.openlayers.Layer.FIELDS.ID);
                var layer = self.getLayerById(id);
                if (layer != null) {
                    var features = [];
                    if (olFeature.get("features") != null) {
                        var olFeatures = olFeature.get("features");
                        for (var i = 0; i < olFeatures.length; i++) {
                            var olFeature = olFeatures[i];
                            var feature = new lxs.gis.openlayers.Feature(olFeature);
                            features.push(feature);
                        }
                    }
                    else {
                        var feature = new lxs.gis.openlayers.Feature(olFeature);
                        features.push(feature);
                    }
                    var action = layer.getAction(event);
                    if (action != null) {
                        action(features);;
                    }
                    if (event == lxs.gis.Events.POINTER_MOVE || event == lxs.gis.Events.CLICK) {
                        tooltipLayer = layer.getTooltip();
                        if (tooltipLayer != null && features.length == 1) {
                            var feature = features[0];
                            self.__currentTooltip = tooltipLayer;
                            self.__olTooltipOverlay.setPosition(evt.coordinate);
                            self.__currentTooltip.show(document.getElementById(lxs.gis.openlayers.Map.TOOLTIP_DIV), feature);
                        }
                    }
                }
            }
        });
    });
}

// Configure all events for map
lxs.gis.openlayers.Map.prototype.__configureEvents = function () {
    this.__configureEvent(lxs.gis.Events.CLICK);
    this.__configureEvent(lxs.gis.Events.POINTER_MOVE);
}

// Add a layer to the map
lxs.gis.openlayers.Map.prototype.addLayer = function (layer) {
    this.__olMap.addLayer(layer._olLayer);
    this.__layers.push(layer);
}

// Get a layer by id
lxs.gis.openlayers.Map.prototype.getLayerById = function (id) {
    for (var i = 0; i < this.__layers.length; i++) {
        var layer = this.__layers[i];
        if (layer.getId() == id)
            return layer;
    }
    return null;
}

// Add a marker to the map
lxs.gis.openlayers.Map.prototype.addMarker = function (coordinates) {
    // Create marker style
    var style = new ol.style.Style({
        image: new ol.style.RegularShape({
            fill: new ol.style.Fill({
                color: lxs.gis.openlayers.DefaultStyles.MARKER_DEFAULT_FILL_COLOR
            }),
            stroke: new ol.style.Stroke({
                color: lxs.gis.openlayers.DefaultStyles.MARKER_DEFAULT_STROKE_COLOR,
                width: lxs.gis.openlayers.DefaultStyles.MARKER_DEFAULT_STROKE_WIDTH
            }),
            points: 5,
            radius: 10,
            radius2: 4,
            angle: 0
        })
    });

    // Create marker feature
    var markerFeature = new ol.Feature(new ol.geom.Point(coordinates));
    markerFeature.setStyle(style);

    // Add feature to markers layer
    var markersSource = this.__olMarkersLayer.getSource();
    markersSource.addFeature(markerFeature);
}

// Remove layer by id
lxs.gis.openlayers.Map.prototype.removeLayer = function (layerId) {
    var layer = this.getLayerById(layerId);
    this.__olMap.removeLayer(layer._olLayer);
    this.__layers.pop(layer);
}

// Remove all markers of the map
lxs.gis.openlayers.Map.prototype.removeMarkers = function (coordinates) {
    var markersSource = this.__olMarkersLayer.getSource();
    markersSource.clear();
}

// Center map view in a point
lxs.gis.openlayers.Map.prototype.center = function (coordinates) {
    this.__olMap.getView().setCenter(coordinates);

}

// Set zoom to map view
lxs.gis.openlayers.Map.prototype.zoom = function (zoomLevel) {
    this.__olMap.getView().setZoom(zoomLevel);

}

// Fit map view to extent passed as parameter
lxs.gis.openlayers.Map.prototype.setExtent = function (extent) {
    this.__olMap.getView().fit(extent);
}

// Set mode to interact with the map
lxs.gis.openlayers.Map.prototype.setDrawingMode = function (mode, layer, action) {
    // Remove previous interactor
    if (this.__drawInteractor != null) {
        this.__olMap.removeInteraction(this.__drawInteractor);
    }

    // Get interactor from mode passed as parameter
    switch (mode) {
        case lxs.gis.openlayers.Map.DRAWING_MODE.RECTANGLE:
            this.__drawInteractor = new ol.interaction.Draw({
                source: layer._olLayer.getSource(),
                type: "Circle",
                geometryFunction: ol.interaction.Draw.createBox()
            });
            break;
        case lxs.gis.openlayers.Map.DRAWING_MODE.POLYGON:
            this.__drawInteractor = new ol.interaction.Draw({
                source: layer._olLayer.getSource(),
                type: "Polygon"
            });
            break;
        default:
            this.__drawInteractor = null;
            break;
    }

    if (this.__drawInteractor != null) {
        // Definition of method that will be executed when geometry is inserted into the map
        this.__drawInteractor.on("drawend", function (e) {
            var feature = new lxs.gis.openlayers.Feature(e.feature);
            action(feature);
        });

        // Add interactor to the map
        this.__olMap.addInteraction(this.__drawInteractor);
    }
}
;/*
    Layer class (abstract)
*/

// Constructor
lxs.gis.openlayers.Layer = function (id) {
    this._id = id;
    this._actions = {};
    this._tooltip = null;
}

// Field values
lxs.gis.openlayers.Layer.FIELDS = {};
lxs.gis.openlayers.Layer.FIELDS.ID = "id";

// Basemap layers predefined
lxs.gis.openlayers.Layer.BASEMAPS = {}
lxs.gis.openlayers.Layer.BASEMAPS.OSM = 0;
lxs.gis.openlayers.Layer.BASEMAPS.BINGMAPS = 1;
lxs.gis.openlayers.Layer.BASEMAPS.CARTODB = 2;

// Source types
lxs.gis.openlayers.Layer.SOURCE_TYPES = {};
lxs.gis.openlayers.Layer.SOURCE_TYPES.EMPTY = 0;
lxs.gis.openlayers.Layer.SOURCE_TYPES.BASEMAP = 1;
lxs.gis.openlayers.Layer.SOURCE_TYPES.WMS = 2;
lxs.gis.openlayers.Layer.SOURCE_TYPES.ARCGIS = 3;
lxs.gis.openlayers.Layer.SOURCE_TYPES.JSON = 4;
lxs.gis.openlayers.Layer.SOURCE_TYPES.JSON_POINTS = 5;
lxs.gis.openlayers.Layer.SOURCE_TYPES.JSON_LINE = 6;

// Get source with features
lxs.gis.openlayers.Layer.prototype.__getFeatureSources = function () {
    var source = this._olLayer.getSource();
    if (source instanceof ol.source.Cluster) {
        return source.getSource();
    }
    else {
        return source;
    }
}

// Get extent of all layer features
lxs.gis.openlayers.Layer.prototype.getExtent = function () {
    var source = this.__getFeatureSources();
    return source.getExtent();
}

// Assign an action to an event
lxs.gis.openlayers.Layer.prototype.setAction = function (event, fn) {
    this._actions[event] = fn;
}

// Get action related to an event
lxs.gis.openlayers.Layer.prototype.getAction = function (event) {
    return this._actions[event];
}

// Set tooltip for every features
lxs.gis.openlayers.Layer.prototype.setTooltip = function (tooltip) {
    this._tooltip = tooltip
}

// Get tooltip of the layer
lxs.gis.openlayers.Layer.prototype.getTooltip = function () {
    return this._tooltip;
}

// Get layer id
lxs.gis.openlayers.Layer.prototype.getId = function () {
    return this._id;
}

/*
    Tile layer class
*/

// Constructor
lxs.gis.openlayers.TileLayer = function (id, sourceType, definitionLayer) {
    // Call to Layer constructor
    lxs.gis.openlayers.Layer.call(this, id);

    // Create layer
    this._olLayer = this._createLayer(sourceType, definitionLayer);

    // Set id as layer property
    this._olLayer.set(lxs.gis.openlayers.Layer.FIELDS.ID, id);
}

// Inheritance
lxs.gis.openlayers.TileLayer.prototype = Object.create(lxs.gis.openlayers.Layer.prototype);

// Create layer from source type and definition layer
lxs.gis.openlayers.TileLayer.prototype._createLayer = function (sourceType, definitionLayer) {
    var olLayer;
    if (sourceType == lxs.gis.openlayers.Layer.SOURCE_TYPES.BASEMAP)
        olLayer = this.__createBaseMapLayer(definitionLayer);
    else
        throw "Source type not valid";
    return olLayer;
}

// Create layer from predefined basemap
lxs.gis.openlayers.TileLayer.prototype.__createBaseMapLayer = function (baseMap) {
    // Get source from specified basemap
    var source;
    if (baseMap == lxs.gis.openlayers.Layer.BASEMAPS.OSM)
        source = new ol.source.OSM();
    else if (baseMap == lxs.gis.openlayers.Layer.BASEMAPS.BINGMAPS)
        source = new ol.source.BingMaps();
    else if (baseMap == lxs.gis.openlayers.Layer.BASEMAPS.CARTODB)
        source = new ol.source.CartoDB();
    else
        throw "Basemap not found";

    // Create layer from source
    var olLayer = new ol.layer.Tile({
        source: source
    });

    // Return layer
    return olLayer;
}

/*
    Vector layer class
*/

// Constructor
lxs.gis.openlayers.VectorLayer = function (id, sourceType, definitionLayer) {
    // Call to Layer constructor
    lxs.gis.openlayers.Layer.call(this, id);

    // Set default colors
    this.__fillColor = "#ff0000";
    this.__strokeColor = "#8801100";

    // Create layer    
    this._olLayer = this._createLayer(sourceType, definitionLayer);

    // Set id as layer property
    this._olLayer.set(lxs.gis.openlayers.Layer.FIELDS.ID, id);
}

// Inheritance
lxs.gis.openlayers.VectorLayer.prototype = Object.create(lxs.gis.openlayers.Layer.prototype);

// Create layer from source type and definition layer
lxs.gis.openlayers.VectorLayer.prototype._createLayer = function (sourceType, definitionLayer) {
    var olLayer;
    if (sourceType == lxs.gis.openlayers.Layer.SOURCE_TYPES.EMPTY)
        olLayer = this.__createEmptyLayer();
    else if (sourceType == lxs.gis.openlayers.Layer.SOURCE_TYPES.JSON)
        olLayer = this.__createLayerFromGeoJSON(definitionLayer);
    else if (sourceType == lxs.gis.openlayers.Layer.SOURCE_TYPES.JSON_POINTS)
        olLayer = this.__createLayerFromGeoJSON(definitionLayer, ol.geom.Point);
    else if (sourceType == lxs.gis.openlayers.Layer.SOURCE_TYPES.JSON_LINES)
        olLayer = this.__createLayerFromGeoJSON(definitionLayer, ol.geom.LineString);
    else
        throw "Source type not valid";
    return olLayer;
}

// Create layer from geojson
lxs.gis.openlayers.VectorLayer.prototype.__createLayerFromGeoJSON = function (geoJSON, byGeometry) {
    // Store current instance
    var self = this;

    // Create source
    var source = new ol.source.Vector({
    });

    // Create layer with default style
    var olLayer = new ol.layer.Vector({
        source: source,
        style: new ol.style.Style({
            image: new ol.style.Circle(({
                fill: new ol.style.Fill({ color: self.__fillColor }),
                radius: 4
            })),
            stroke: new ol.style.Stroke({ color: self.__strokeColor, width: 1 })
        })
    });

    // Add features from GeoJSON to source
    var format = new ol.format.GeoJSON({
        featureProjection: "EPSG:3857"
    });
    var featuresGeoJSON = format.readFeatures(geoJSON);
    for (var i = 0; i < featuresGeoJSON.length; i++) {
        var featureGeoJSON = featuresGeoJSON[i];
        if (byGeometry == null || featureGeoJSON.getGeometry() instanceof byGeometry) {
            var feature = new ol.Feature({
                geometry: featureGeoJSON.getGeometry(),
            });
            feature.setProperties(featureGeoJSON.getProperties());
            source.addFeature(feature);
        }
    }

    // Return layer
    return olLayer;
}

// Create layer with default style from features
lxs.gis.openlayers.VectorLayer.prototype.__createDefaultLayerFromFeatures = function (features) {
    var source = new ol.source.Vector({
        features: features
    });
    var olLayer = new ol.layer.Vector({
        source: source,
        style: new ol.style.Style({
            image: new ol.style.Circle(({
                fill: new ol.style.Fill({ color: self.__fillColor }),
                radius: 4
            })),
            stroke: new ol.style.Stroke({ color: self.__strokeColor, width: 1 })
        })
    });
    return olLayer;
}

// Set colors to layer features
lxs.gis.openlayers.VectorLayer.prototype.setColors = function (fill, stroke) {
    this.__fillColor = fill;
    this.__strokeColor = stroke;
    var self = this;
    var style = new ol.style.Style({
        image: new ol.style.Circle(({
            fill: new ol.style.Fill({ color: self.__fillColor }),
            radius: 4
        })),
        stroke: new ol.style.Stroke({ color: self.__strokeColor, width: 1 })
    });
    this._olLayer.setStyle(style);
}

// Apply cluster to the layer
lxs.gis.openlayers.VectorLayer.prototype.setCluster = function (distance) {
    // Create cluster from source
    var source = this._olLayer.getSource();
    var clusterSource = new ol.source.Cluster({
        distance: distance,
        source: source
    });

    // Set cluster to layer
    this._olLayer.setSource(clusterSource);

    // Definition of default styles for each feature of cluster
    var style = function (feature) {
        var size = feature.get("features").length;
        var style;
        if (size == 1) {
            var f = feature.get("features")[0];
            style = f.getStyle();
            if (style == null) {
                style = new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 8,
                        stroke: new ol.style.Stroke({
                            color: lxs.gis.openlayers.DefaultStyles.CLUSTER_ONE_FEATURE_DEFAULT_STROKE_COLOR
                        }),
                        fill: new ol.style.Fill({
                            color: lxs.gis.openlayers.DefaultStyles.CLUSTER_ONE_FEATURE_DEFAULT_FILL_COLOR
                        })
                    })
                });
            }
        }
        else {
            style = new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 10,
                    stroke: new ol.style.Stroke({
                        color: lxs.gis.openlayers.DefaultStyles.CLUSTER_DEFAULT_STROKE_COLOR
                    }),
                    fill: new ol.style.Fill({
                        color: lxs.gis.openlayers.DefaultStyles.CLUSTER_DEFAULT_FILL_COLOR
                    })
                }),
                text: new ol.style.Text({
                    text: size.toString(),
                    fill: new ol.style.Fill({
                        color: lxs.gis.openlayers.DefaultStyles.CLUSTER_DEFAULT_TEXT_COLOR
                    })
                })
            });
        }
        return style;
    }
    this._olLayer.setStyle(style);
}

// Split layer to other layers grouped by geometry
lxs.gis.openlayers.VectorLayer.prototype.splitByGeometries = function () {
    var layers = {};
    var pointsFeatures = [];
    var linesFeatures = [];
    var features = this.getFeatures();
    for (var i = 0; i < features.length; i++) {
        var feature = features[i];
        if (feature.__olFeature.getGeometry() instanceof ol.geom.Point)
            pointsFeatures.push(feature.__olFeature);
        else if (feature.__olFeature.getGeometry() instanceof ol.geom.LineString)
            linesFeatures.push(feature.__olFeature);
    }
    if (pointsFeatures.length > 0) {
        layers[lxs.gis.Geometry.POINT] = this.__createDefaultLayerFromFeatures(pointsFeatures);
    }
    if (linesFeatures.length > 0) {
        layers[lxs.gis.Geometry.Line] = this.__createDefaultLayerFromFeatures(linesFeatures);
    }
    return layers;
}

// Create empty layer
lxs.gis.openlayers.VectorLayer.prototype.__createEmptyLayer = function () {
    var olSource = new ol.source.Vector({ wrapX: false });
    var olLayer = new ol.layer.Vector({
        source: olSource
    });
    return olLayer;
}

// Add a feature to layer
lxs.gis.openlayers.VectorLayer.prototype.addFeature = function (feature) {
    var olFeature = feature.__olFeature;
    var olSource = this.__getFeatureSources();
    olSource.addFeature(olFeature);
}

// Remove all features of layer
lxs.gis.openlayers.VectorLayer.prototype.removeFeatures = function () {
    var olSource = this.__getFeatureSources();
    olSource.clear();
}

// Get all features of layer
lxs.gis.openlayers.VectorLayer.prototype.getFeatures = function () {
    var features = [];
    var olSource = this.__getFeatureSources();
    var olFeatures = olSource.getFeatures();
    for (var i = 0; i < olFeatures.length; i++) {
        var olFeature = olFeatures[i];
        var feature = new lxs.gis.openlayers.Feature(olFeature);
        features.push(feature);
    }
    return features;
}

// Find a feature by attribute
lxs.gis.openlayers.VectorLayer.prototype.getFeatureByAttribute = function (attribute, value) {
    var olSource = this.__getFeatureSources();
    var olFeatures = olSource.getFeatures();
    for (var i = 0; i < olFeatures.length; i++) {
        var olFeature = olFeatures[i];
        if (olFeature.get(attribute) == value) {
            var feature = new lxs.gis.openlayers.Feature(olFeature);
            return feature;
        }
    }
    return null;
}
;/*
    Tooltip class
*/

// Constructor
lxs.gis.openlayers.Tooltip = function (formatter) {
    this.__formatter = formatter;
}

lxs.gis.openlayers.Tooltip.prototype.show = function (element, feature) {    
    var tooltipContent = this.__formatter.apply(feature);
    element.innerHTML = tooltipContent.html();
    element.style.display = "";
}

lxs.gis.openlayers.Tooltip.prototype.hide = function (element) {
    element.style.display = "none";
}
;/*
    Feature class
*/

// Constructor
lxs.gis.openlayers.Feature = function (olFeature) {
    this.__olFeature = olFeature;
}

// Static method
// Create a feature from a openlayers geometry
lxs.gis.openlayers.Feature.__createFromGeometry = function (olGeometry) {
    var olFeature = new ol.Feature({
        geometry: olGeometry
    });
    var feature = new lxs.gis.openlayers.Feature(olFeature);
    return feature
}

// Static method
// Create a feature from a point geometry
lxs.gis.openlayers.Feature.createPoint = function (coordinates) {
    var olGeometry = new ol.geom.Point(coordinates);
    return lxs.gis.openlayers.Feature.__createFromGeometry(olGeometry);
}

// Static method
// Create a feature from a polyline geometry
lxs.gis.openlayers.Feature.createPolyline = function (polyline) {
    var olGeometry;
    if (polyline instanceof lxs.gis.geometry.polyline)
        olGeometry = new ol.geom.LineString(polyline.getCoordinates());
    else
        olGeometry = new ol.geom.LineString(polyline);
    return lxs.gis.openlayers.Feature.__createFromGeometry(olGeometry);
}

// Static method
// Create a feature from a polygon geometry
lxs.gis.openlayers.Feature.createPolygon = function (polygon) {
    var olGeometry;
    if (polygon instanceof lxs.gis.geometry.polygon) {
        var olPolygonCoordinates = [];
        var olCoordinates = [];
        var coordinates = polygon.getCoordinates();
        for (var i = 0; i < coordinates.length; i++) {
            var olCoordinate = ol.proj.fromLonLat(coordinates[i]);
            olCoordinates.push(olCoordinate);
        }
        olPolygonCoordinates.push(olCoordinates);
        var holes = polygon.getHoles();
        for (var i = 0; i < holes.length; i++) {
            var hole = holes[i];
            var olCoordinatesHole = [];
            var coordinatesHole = hole.getCoordinates();
            for (var j = 0; j < coordinatesHole.length; j++) {
                var olCoordinate = ol.proj.fromLonLat(coordinatesHole[j]);
                olCoordinatesHole.push(olCoordinate);
            }
            olPolygonCoordinates.push(olCoordinatesHole);
        }
        olGeometry = new ol.geom.Polygon(olPolygonCoordinates);
    }
    else
        olGeometry = new ol.geom.Polygon(polygon);
    return lxs.gis.openlayers.Feature.__createFromGeometry(olGeometry);
}


// Get a feature property
lxs.gis.openlayers.Feature.prototype.getProperty = function (property) {
    var value = this.__olFeature.get(property);
    return value;
}

// Get the feature center point
lxs.gis.openlayers.Feature.prototype.getCenter = function () {
    var geometry = this.__olFeature.getGeometry()
    var coordinates = geometry.getCoordinates();
    return coordinates
}

// Verify if the feature represents a point
lxs.gis.openlayers.Feature.prototype.isPoint = function () {
    var geometry = this.__olFeature.getGeometry();
    return geometry instanceof ol.geom.Point;
}

// Get the feature coordinates
lxs.gis.openlayers.Feature.prototype.getCoordinates = function (proj) {
    var coordinates = this.__olFeature.getGeometry().getCoordinates();
    if (proj != null) {
        for (var i = 0; i < coordinates.length; i++) {
			for (var j = 0; j < coordinates[i].length; j++) 
			{
				var olCoordinate = ol.proj.fromLonLat(coordinates[i][j], lxs.gis.Projection.getSRS(proj));
				coordinates[i][j] = olCoordinate;
			}
        }
    }
    return coordinates;
}

// Hide the feature
lxs.gis.openlayers.Feature.prototype.hide = function () {
    var emptyImgStyle = new ol.style.Style({ image: '' });
    this.__olFeature.setStyle(emptyImgStyle);
}

// Show the feature
lxs.gis.openlayers.Feature.prototype.show = function () {
    this.__olFeature.setStyle(null);
}

// Set stroke color to the feature
lxs.gis.openlayers.Feature.prototype.setStrokeColor = function (color) {
    lxs.gis.openlayers.__setStrokeColor(this.__olFeature, color);
}
lxs.gis.openlayers.Feature.prototype.setStrokeColor2 = function (ftr, color) {
    lxs.gis.openlayers.__setStrokeColor(ftr.__olFeature, color);
}

// Set fill color to the feature
lxs.gis.openlayers.Feature.prototype.setFillColor = function (color) {
    lxs.gis.openlayers.__setFillColor(this.__olFeature, color);
}
lxs.gis.openlayers.Feature.prototype.setFillColor2 = function (ftr, color) {
    lxs.gis.openlayers.__setFillColor(ftr.__olFeature, color);
}

// Set text to the feature
lxs.gis.openlayers.Feature.prototype.setText = function (text) {
    var olStyle = new ol.style.Style({

        image: new ol.style.Circle({
            radius: 8,
            stroke: new ol.style.Stroke({
                color: "#760de0"
            }),
            fill: new ol.style.Fill({
                color: "#7CFC00"
            })
        }),
        text: new ol.style.Text({
            text: text,
            font: '14px sans-serif',
            offsetY: -20,
            fill: new ol.style.Fill({
                color: '#000'
            }),
            stroke: new ol.style.Stroke({
                color: "#000",
                width: 1
            })
        })
    });

    this.__olFeature.setStyle(olStyle);
}
// Set text to the feature
lxs.gis.openlayers.Feature.prototype.setText2 = function (text) {
    var olStyle = new ol.style.Style({

        image: new ol.style.Circle({
            radius: 8,
            stroke: new ol.style.Stroke({
                color: "#FF00de0"
            }),
            fill: new ol.style.Fill({
                color: "#ff0000"
            })
        }),
        text: new ol.style.Text({
            text: text,
            font: '14px sans-serif',
            offsetY: -20,
            fill: new ol.style.Fill({
                color: '#00F'
            }),
            stroke: new ol.style.Stroke({
                color: "#00F",
                width: 1
            })
        })
    });

    this.__olFeature.setStyle(olStyle);
}

;
// Definition of namespace for geometries
lxs.gis.geometry = function () {
}

/*
    Polyline class
*/

// Constructor
lxs.gis.geometry.polyline = function (coordinates) {
    this._coordinates = coordinates != null ? coordinates : [];
}

// Get the coordinates of the polyline
lxs.gis.geometry.polyline.prototype.getCoordinates = function () {
    return this._coordinates;
}


/*
    Polygon class
*/

// Constructor
lxs.gis.geometry.polygon = function (coordinates, holes) {
    this._coordinates = [];
    if (coordinates != null) {
        for (var i = 0; i < coordinates.length; i++) {
            this.addCoordinate(coordinates[i]);
        }
    }
    this._holes = holes != null ? holes : [];
}

// Static method
lxs.gis.geometry.polygon.createWorldwidePolygon = function () {
    var coordinates = [[179.9, 89.9], [-179.9, 89.9], [-179.9, -89.9], [179.9, -89.9], [179.9, 89.9]];
    return new lxs.gis.geometry.polygon(coordinates);
}

// Get the coordinates of the polygon
lxs.gis.geometry.polygon.prototype.getCoordinates = function () {
    return this._coordinates;
}

// Add a coordinate to the polygon
lxs.gis.geometry.polygon.prototype.addCoordinate = function (coordinate) {
    this._coordinates.push(coordinate);
}

// Get the holes of the polygon
lxs.gis.geometry.polygon.prototype.getHoles = function () {
    return this._holes;
}

// Add a hole to the polygon
lxs.gis.geometry.polygon.prototype.addHole = function (polygon) {
    this._holes.push(polygon);
}

// Verify if the polygon is valid
lxs.gis.geometry.polygon.prototype.isValid = function () {
    if (this._coordinates[0] != this._coordinates[this._coordinates.length - 1])
        return false;
    for (var i = 0; i < this._holes.length; i++) {
        var coordinates = this._holes[i];
        if (coordinates[0] != coordinates[this._coordinates.length - 1])
            return false;
    }
    return true;
}

// Verify if the polygon is CW or CCW
//
// CCW direction example
//                         B <--------  A
//                         |            /\
//                         |            |
//                         \/           | 
//                         C ---------> D
//
lxs.gis.geometry.polygon.prototype.isClockwiseDirection = function () {
    var isCW = false;

    // The coordinates will be altered to avoid bad computation effects from (+) and (-) coordinates
    var coordinatesModified = [];
    for (var i = 0; i < this._coordinates.length; i++) {
        coordinatesModified.push([this._coordinates[i][0] + 180, this._coordinates[i][1] + 90]);
    }
    if (coordinatesModified != null && coordinatesModified.length > 2) {
        var polygonArea = null;
        var end = coordinatesModified.length - 1;
        polygonArea = coordinatesModified[end][1] * coordinatesModified[0][0] - coordinatesModified[0][1] * coordinatesModified[end][0];

        for (var i = 0; i < end; ++i) {
            const n = i + 1;
            polygonArea += coordinatesModified[i][1] * coordinatesModified[n][0] - coordinatesModified[n][1] * coordinatesModified[i][0];
        }

        isCW = (polygonArea > 0) ? true : false;
    }

    return isCW;
}
