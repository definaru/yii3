# **Class yii\grid\GridView**
[All Classes](index) | [Properties](#properties) | [Methods](#methods) | [Events](#events) | [Constants](#constants)

|**Inheritance**|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview) » [yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview) » [yii\base\Widget](/doc/api/2.0/yii-base-widget) » [yii\base\Component](/doc/api/2.0/yii-base-component) » [yii\base\BaseObject](/doc/api/2.0/yii-base-baseobject)|
| :-: | :- |
|**Implements**|[yii\base\Configurable](/doc/api/2.0/yii-base-configurable), [yii\base\ViewContextInterface](/doc/api/2.0/yii-base-viewcontextinterface)|
|**Available since version**|2\.0|
|****|<https://github.com/yiisoft/yii2/blob/master/framework/grid/GridView.php>|

**The GridView widget is used to display data in a grid.**

It provides features like [sorting](/doc/api/2.0/yii-widgets-baselistview#$sorter-detail), [paging](/doc/api/2.0/yii-widgets-baselistview#$pager-detail) and also [filtering](/doc/api/2.0/yii-grid-gridview#$filterModel-detail) the data.

A basic usage looks like the following:

```php
<?= GridView::widget([
    'dataProvider' => $dataProvider,
    'columns' => [
        'id',
        'name',
        'created\_at:datetime',
        // ...
    ],
]) ?>
```

The columns of the grid table are configured in terms of [yii\grid\Column](/doc/api/2.0/yii-grid-column) classes, which are configured via [$columns](/doc/api/2.0/yii-grid-gridview#$columns-detail).

The look and feel of a grid view can be customized using the large amount of properties.

For more details and usage information on GridView, see the [guide article on data widgets](/doc/guide/2.0/en/output-data-widgets).
## **Public Properties**

|**Property**|**Type**|**Description**|**Defined By**|
| :-: | :-: | :-: | :-: |
|[$afterRow](/doc/api/2.0/yii-grid-gridview#$afterRow-detail)|[Closure](https://www.php.net/class.closure)|An anonymous function that is called once AFTER rendering each data model.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$autoIdPrefix](/doc/api/2.0/yii-grid-gridview#$autoIdPrefix-detail)|[string](https://www.php.net/language.types.string)|The prefix to the automatically generated widget IDs.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[$beforeRow](/doc/api/2.0/yii-grid-gridview#$beforeRow-detail)|[Closure](https://www.php.net/class.closure)|An anonymous function that is called once BEFORE rendering each data model.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$behaviors](/doc/api/2.0/yii-grid-gridview#$behaviors-detail)|[yii\base\Behavior](/doc/api/2.0/yii-base-behavior)[]|List of behaviors attached to this component.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[$caption](/doc/api/2.0/yii-grid-gridview#$caption-detail)|[string](https://www.php.net/language.types.string)|The caption of the grid table|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$captionOptions](/doc/api/2.0/yii-grid-gridview#$captionOptions-detail)|[array](https://www.php.net/language.types.array)|The HTML attributes for the caption element.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$columns](/doc/api/2.0/yii-grid-gridview#$columns-detail)|[array](https://www.php.net/language.types.array)|Grid column configuration.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$dataColumnClass](/doc/api/2.0/yii-grid-gridview#$dataColumnClass-detail)|[string](https://www.php.net/language.types.string)|The default data column class if the class name is not explicitly specified when configuring a data column.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$dataProvider](/doc/api/2.0/yii-grid-gridview#$dataProvider-detail)|[yii\data\DataProviderInterface](/doc/api/2.0/yii-data-dataproviderinterface)|The data provider for the view.|[yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview)|
|[$emptyCell](/doc/api/2.0/yii-grid-gridview#$emptyCell-detail)|[string](https://www.php.net/language.types.string)|The HTML display when the content of a cell is empty.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$emptyText](/doc/api/2.0/yii-grid-gridview#$emptyText-detail)|[string](https://www.php.net/language.types.string)|[false](https://www.php.net/language.types.boolean)|The HTML content to be displayed when [$dataProvider](/doc/api/2.0/yii-widgets-baselistview#$dataProvider-detail) does not have any data.|[yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview)|
|[$emptyTextOptions](/doc/api/2.0/yii-grid-gridview#$emptyTextOptions-detail)|[array](https://www.php.net/language.types.array)|The HTML attributes for the emptyText of the list view.|[yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview)|
|[$filterErrorOptions](/doc/api/2.0/yii-grid-gridview#$filterErrorOptions-detail)|[array](https://www.php.net/language.types.array)|The options for rendering every filter error message.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$filterErrorSummaryOptions](/doc/api/2.0/yii-grid-gridview#$filterErrorSummaryOptions-detail)|[array](https://www.php.net/language.types.array)|The options for rendering the filter error summary.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$filterModel](/doc/api/2.0/yii-grid-gridview#$filterModel-detail)|[yii\base\Model](/doc/api/2.0/yii-base-model)|[null](https://www.php.net/language.types.null)|The model that keeps the user-entered filter data.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$filterOnFocusOut](/doc/api/2.0/yii-grid-gridview#$filterOnFocusOut-detail)|[boolean](https://www.php.net/language.types.boolean)|Whatever to apply filters on losing focus.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$filterPosition](/doc/api/2.0/yii-grid-gridview#$filterPosition-detail)|[string](https://www.php.net/language.types.string)|Whether the filters should be displayed in the grid view.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$filterRowOptions](/doc/api/2.0/yii-grid-gridview#$filterRowOptions-detail)|[array](https://www.php.net/language.types.array)|The HTML attributes for the filter row element.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$filterSelector](/doc/api/2.0/yii-grid-gridview#$filterSelector-detail)|[string](https://www.php.net/language.types.string)|Additional jQuery selector for selecting filter input fields|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$filterUrl](/doc/api/2.0/yii-grid-gridview#$filterUrl-detail)|[string](https://www.php.net/language.types.string)|[array](https://www.php.net/language.types.array)|[null](https://www.php.net/language.types.null)|The URL for returning the filtering result.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$footerRowOptions](/doc/api/2.0/yii-grid-gridview#$footerRowOptions-detail)|[array](https://www.php.net/language.types.array)|The HTML attributes for the table footer row.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$formatter](/doc/api/2.0/yii-grid-gridview#$formatter-detail)|[array](https://www.php.net/language.types.array)|[yii\i18n\Formatter](/doc/api/2.0/yii-i18n-formatter)|[null](https://www.php.net/language.types.null)|The formatter used to format model attribute values into displayable texts.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$headerRowOptions](/doc/api/2.0/yii-grid-gridview#$headerRowOptions-detail)|[array](https://www.php.net/language.types.array)|The HTML attributes for the table header row.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$id](/doc/api/2.0/yii-grid-gridview#$id-detail)|[string](https://www.php.net/language.types.string)|[null](https://www.php.net/language.types.null)|ID of the widget.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[$layout](/doc/api/2.0/yii-grid-gridview#$layout-detail)|[string](https://www.php.net/language.types.string)|The layout that determines how different sections of the grid view should be organized.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$options](/doc/api/2.0/yii-grid-gridview#$options-detail)|[array](https://www.php.net/language.types.array)|The HTML attributes for the container tag of the grid view.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$pager](/doc/api/2.0/yii-grid-gridview#$pager-detail)|[array](https://www.php.net/language.types.array)|The configuration for the pager widget.|[yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview)|
|[$placeFooterAfterBody](/doc/api/2.0/yii-grid-gridview#$placeFooterAfterBody-detail)|[boolean](https://www.php.net/language.types.boolean)|Whether to place footer after body in DOM if $showFooter is true|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$rowOptions](/doc/api/2.0/yii-grid-gridview#$rowOptions-detail)|[array](https://www.php.net/language.types.array)|[Closure](https://www.php.net/class.closure)|The HTML attributes for the table body rows.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$showFooter](/doc/api/2.0/yii-grid-gridview#$showFooter-detail)|[boolean](https://www.php.net/language.types.boolean)|Whether to show the footer section of the grid table.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$showHeader](/doc/api/2.0/yii-grid-gridview#$showHeader-detail)|[boolean](https://www.php.net/language.types.boolean)|Whether to show the header section of the grid table.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$showOnEmpty](/doc/api/2.0/yii-grid-gridview#$showOnEmpty-detail)|[boolean](https://www.php.net/language.types.boolean)|Whether to show the grid view if [$dataProvider](/doc/api/2.0/yii-widgets-baselistview#$dataProvider-detail) returns no data.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$sorter](/doc/api/2.0/yii-grid-gridview#$sorter-detail)|[array](https://www.php.net/language.types.array)|The configuration for the sorter widget.|[yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview)|
|[$summary](/doc/api/2.0/yii-grid-gridview#$summary-detail)|[string](https://www.php.net/language.types.string)|The HTML content to be displayed as the summary of the list view.|[yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview)|
|[$summaryOptions](/doc/api/2.0/yii-grid-gridview#$summaryOptions-detail)|[array](https://www.php.net/language.types.array)|The HTML attributes for the summary of the list view.|[yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview)|
|[$tableOptions](/doc/api/2.0/yii-grid-gridview#$tableOptions-detail)|[array](https://www.php.net/language.types.array)|The HTML attributes for the grid table element.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[$view](/doc/api/2.0/yii-grid-gridview#$view-detail)|[yii\web\View](/doc/api/2.0/yii-web-view)|The view object that can be used to render views or view files.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[$viewPath](/doc/api/2.0/yii-grid-gridview#$viewPath-detail)|[string](https://www.php.net/language.types.string)|The directory containing the view files for this widget.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|


## **Public Methods**

|**Method**|**Description**|**Defined By**|
| :-: | :-: | :-: |
|[__call()](/doc/api/2.0/yii-grid-gridview#__call\(\)-detail)|Calls the named method which is not a class method.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[__clone()](/doc/api/2.0/yii-grid-gridview#__clone\(\)-detail)|This method is called after the object is created by cloning an existing one.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[__construct()](/doc/api/2.0/yii-grid-gridview#__construct\(\)-detail)|Constructor.|[yii\base\BaseObject](/doc/api/2.0/yii-base-baseobject)|
|[__get()](/doc/api/2.0/yii-grid-gridview#__get\(\)-detail)|Returns the value of a component property.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[__isset()](/doc/api/2.0/yii-grid-gridview#__isset\(\)-detail)|Checks if a property is set, i.e. defined and not null.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[__set()](/doc/api/2.0/yii-grid-gridview#__set\(\)-detail)|Sets the value of a component property.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[__unset()](/doc/api/2.0/yii-grid-gridview#__unset\(\)-detail)|Sets a component property to be null.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[afterRun()](/doc/api/2.0/yii-grid-gridview#afterRun\(\)-detail)|This method is invoked right after a widget is executed.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[attachBehavior()](/doc/api/2.0/yii-grid-gridview#attachBehavior\(\)-detail)|Attaches a behavior to this component.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[attachBehaviors()](/doc/api/2.0/yii-grid-gridview#attachBehaviors\(\)-detail)|Attaches a list of behaviors to the component.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[beforeRun()](/doc/api/2.0/yii-grid-gridview#beforeRun\(\)-detail)|This method is invoked right before the widget is executed.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[begin()](/doc/api/2.0/yii-grid-gridview#begin\(\)-detail)|Begins a widget.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[behaviors()](/doc/api/2.0/yii-grid-gridview#behaviors\(\)-detail)|Returns a list of behaviors that this component should behave as.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[canGetProperty()](/doc/api/2.0/yii-grid-gridview#canGetProperty\(\)-detail)|Returns a value indicating whether a property can be read.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[canSetProperty()](/doc/api/2.0/yii-grid-gridview#canSetProperty\(\)-detail)|Returns a value indicating whether a property can be set.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[className()](/doc/api/2.0/yii-grid-gridview#className\(\)-detail)|Returns the fully qualified name of this class.|[yii\base\BaseObject](/doc/api/2.0/yii-base-baseobject)|
|[detachBehavior()](/doc/api/2.0/yii-grid-gridview#detachBehavior\(\)-detail)|Detaches a behavior from the component.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[detachBehaviors()](/doc/api/2.0/yii-grid-gridview#detachBehaviors\(\)-detail)|Detaches all behaviors from the component.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[end()](/doc/api/2.0/yii-grid-gridview#end\(\)-detail)|Ends a widget.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[ensureBehaviors()](/doc/api/2.0/yii-grid-gridview#ensureBehaviors\(\)-detail)|Makes sure that the behaviors declared in [behaviors()](/doc/api/2.0/yii-base-component#behaviors\(\)-detail) are attached to this component.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[getBehavior()](/doc/api/2.0/yii-grid-gridview#getBehavior\(\)-detail)|Returns the named behavior object.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[getBehaviors()](/doc/api/2.0/yii-grid-gridview#getBehaviors\(\)-detail)|Returns all behaviors attached to this component.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[getId()](/doc/api/2.0/yii-grid-gridview#getId\(\)-detail)|Returns the ID of the widget.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[getView()](/doc/api/2.0/yii-grid-gridview#getView\(\)-detail)|Returns the view object that can be used to render views or view files.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[getViewPath()](/doc/api/2.0/yii-grid-gridview#getViewPath\(\)-detail)|Returns the directory containing the view files for this widget.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[hasEventHandlers()](/doc/api/2.0/yii-grid-gridview#hasEventHandlers\(\)-detail)|Returns a value indicating whether there is any handler attached to the named event.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[hasMethod()](/doc/api/2.0/yii-grid-gridview#hasMethod\(\)-detail)|Returns a value indicating whether a method is defined.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[hasProperty()](/doc/api/2.0/yii-grid-gridview#hasProperty\(\)-detail)|Returns a value indicating whether a property is defined for this component.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[init()](/doc/api/2.0/yii-grid-gridview#init\(\)-detail)|Initializes the grid view.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[off()](/doc/api/2.0/yii-grid-gridview#off\(\)-detail)|Detaches an existing event handler from this component.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[on()](/doc/api/2.0/yii-grid-gridview#on\(\)-detail)|Attaches an event handler to an event.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[render()](/doc/api/2.0/yii-grid-gridview#render\(\)-detail)|Renders a view.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[renderCaption()](/doc/api/2.0/yii-grid-gridview#renderCaption\(\)-detail)|Renders the caption element.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[renderColumnGroup()](/doc/api/2.0/yii-grid-gridview#renderColumnGroup\(\)-detail)|Renders the column group HTML.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[renderEmpty()](/doc/api/2.0/yii-grid-gridview#renderEmpty\(\)-detail)|Renders the HTML content indicating that the list view has no data.|[yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview)|
|[renderErrors()](/doc/api/2.0/yii-grid-gridview#renderErrors\(\)-detail)|Renders validator errors of filter model.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[renderFile()](/doc/api/2.0/yii-grid-gridview#renderFile\(\)-detail)|Renders a view file.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[renderFilters()](/doc/api/2.0/yii-grid-gridview#renderFilters\(\)-detail)|Renders the filter.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[renderItems()](/doc/api/2.0/yii-grid-gridview#renderItems\(\)-detail)|Renders the data models for the grid view.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[renderPager()](/doc/api/2.0/yii-grid-gridview#renderPager\(\)-detail)|Renders the pager.|[yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview)|
|[renderSection()](/doc/api/2.0/yii-grid-gridview#renderSection\(\)-detail)|Renders a section of the specified name.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[renderSorter()](/doc/api/2.0/yii-grid-gridview#renderSorter\(\)-detail)|Renders the sorter.|[yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview)|
|[renderSummary()](/doc/api/2.0/yii-grid-gridview#renderSummary\(\)-detail)|Renders the summary text.|[yii\widgets\BaseListView](/doc/api/2.0/yii-widgets-baselistview)|
|[renderTableBody()](/doc/api/2.0/yii-grid-gridview#renderTableBody\(\)-detail)|Renders the table body.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[renderTableFooter()](/doc/api/2.0/yii-grid-gridview#renderTableFooter\(\)-detail)|Renders the table footer.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[renderTableHeader()](/doc/api/2.0/yii-grid-gridview#renderTableHeader\(\)-detail)|Renders the table header.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[renderTableRow()](/doc/api/2.0/yii-grid-gridview#renderTableRow\(\)-detail)|Renders a table row with the given data model and key.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[run()](/doc/api/2.0/yii-grid-gridview#run\(\)-detail)|Runs the widget.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[setId()](/doc/api/2.0/yii-grid-gridview#setId\(\)-detail)|Sets the ID of the widget.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[setView()](/doc/api/2.0/yii-grid-gridview#setView\(\)-detail)|Sets the view object to be used by this widget.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[trigger()](/doc/api/2.0/yii-grid-gridview#trigger\(\)-detail)|Triggers an event.|[yii\base\Component](/doc/api/2.0/yii-base-component)|
|[widget()](/doc/api/2.0/yii-grid-gridview#widget\(\)-detail)|Creates a widget instance and runs it.|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|


## **Protected Methods**

|**Method**|**Description**|**Defined By**|
| :-: | :-: | :-: |
|[createDataColumn()](/doc/api/2.0/yii-grid-gridview#createDataColumn\(\)-detail)|Creates a [yii\grid\DataColumn](/doc/api/2.0/yii-grid-datacolumn) object based on a string in the format of "attribute:format:label".|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[getClientOptions()](/doc/api/2.0/yii-grid-gridview#getClientOptions\(\)-detail)|Returns the options for the grid view JS widget.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[guessColumns()](/doc/api/2.0/yii-grid-gridview#guessColumns\(\)-detail)|This function tries to guess the columns to show from the given data if [$columns](/doc/api/2.0/yii-grid-gridview#$columns-detail) are not explicitly specified.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|[initColumns()](/doc/api/2.0/yii-grid-gridview#initColumns\(\)-detail)|Creates column objects and initializes them.|[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|


## **Events**

|**Event**|**Type**|**Description**|**Defined By**|
| :-: | :-: | :-: | :-: |
|[EVENT_AFTER_RUN](/doc/api/2.0/yii-grid-gridview#EVENT_AFTER_RUN-detail)|[yii\base\WidgetEvent](/doc/api/2.0/yii-base-widgetevent)|An event raised right after executing a widget. (available since version 2.0.11) |[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[EVENT_BEFORE_RUN](/doc/api/2.0/yii-grid-gridview#EVENT_BEFORE_RUN-detail)|[yii\base\WidgetEvent](/doc/api/2.0/yii-base-widgetevent)|An event raised right before executing a widget. (available since version 2.0.11) |[yii\base\Widget](/doc/api/2.0/yii-base-widget)|
|[EVENT_INIT](/doc/api/2.0/yii-grid-gridview#EVENT_INIT-detail)|[yii\base\Event](/doc/api/2.0/yii-base-event)|An event that is triggered when the widget is initialized via [init()](/doc/api/2.0/yii-base-widget#init\(\)-detail). (available since version 2.0.11) |[yii\base\Widget](/doc/api/2.0/yii-base-widget)|

## **Constants**

|**Constant**|**Value**|**Description**|**Defined By**|
| :-: | :-: | :-: | :-: |
|FILTER\_POS\_BODY|'body'||[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|FILTER\_POS\_FOOTER|'footer'||[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|
|FILTER\_POS\_HEADER|'header'||[yii\grid\GridView](/doc/api/2.0/yii-grid-gridview)|

## **Property Details**

```php
$afterRow public property
``` 

An anonymous function that is called once AFTER rendering each data model. It should have the similar signature as [$rowOptions](/doc/api/2.0/yii-grid-gridview#$rowOptions-detail). The return result of the function will be rendered directly.

::: tip _
public [Closure](https://www.php.net/class.closure) [$afterRow](/doc/api/2.0/yii-grid-gridview#$afterRow-detail) = null
:::

```php
$beforeRow public property 
```

An anonymous function that is called once BEFORE rendering each data model. It should have the similar signature as [$rowOptions](/doc/api/2.0/yii-grid-gridview#$rowOptions-detail). The return result of the function will be rendered directly.

::: tip _
public [Closure](https://www.php.net/class.closure) [$beforeRow](/doc/api/2.0/yii-grid-gridview#$beforeRow-detail) = null
:::

```php
$caption public property 
```

The caption of the grid table

See also [$captionOptions](/doc/api/2.0/yii-grid-gridview#$captionOptions-detail).

::: tip _
public [string](https://www.php.net/language.types.string) [$caption](/doc/api/2.0/yii-grid-gridview#$caption-detail) = null
:::

```php
$captionOptions public property 
```

The HTML attributes for the caption element.

See also:

- [yii\helpers\Html::renderTagAttributes()](/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes\(\)-detail) for details on how attributes are being rendered.
- [$caption](/doc/api/2.0/yii-grid-gridview#$caption-detail)

::: tip _
public [array](https://www.php.net/language.types.array) [$captionOptions](/doc/api/2.0/yii-grid-gridview#$captionOptions-detail) = []
:::

```php
$columns public property
``` 

Grid column configuration. Each array element represents the configuration for one particular grid column. For example,

```php
[
    ['class' => SerialColumn::class],
    [
        'class' => DataColumn::class, // this line is optional
        'attribute' => 'name',
        'format' => 'text',
        'label' => 'Name',
    ],
    ['class' => CheckboxColumn::class],
]
```

If a column is of class [yii\grid\DataColumn](/doc/api/2.0/yii-grid-datacolumn), the "class" element can be omitted.

As a shortcut format, a string may be used to specify the configuration of a data column which only contains [attribute](/doc/api/2.0/yii-grid-datacolumn#$attribute-detail), [format](/doc/api/2.0/yii-grid-datacolumn#$format-detail), and/or [label](/doc/api/2.0/yii-grid-datacolumn#$label-detail) options: "attribute:format:label". For example, the above "name" column can also be specified as: "name:text:Name". Both "format" and "label" are optional. They will take default values if absent.

Using the shortcut format the configuration for columns in simple cases would look like this:

```php
[
    'id',
    'amount:currency:Total Amount',
    'created\_at:datetime',
]
```

When using a [$dataProvider](/doc/api/2.0/yii-widgets-baselistview#$dataProvider-detail) with active records, you can also display values from related records, e.g. the name attribute of the author relation:

```php
// shortcut syntax
'author.name',
// full syntax
[
    'attribute' => 'author.name',
    // ...
]
```

::: tip _
public [array](https://www.php.net/language.types.array) [$columns](/doc/api/2.0/yii-grid-gridview#$columns-detail) = []
:::

```php
$dataColumnClass public property 
```

The default data column class if the class name is not explicitly specified when configuring a data column. Defaults to `yii\grid\DataColumn`.

::: tip _
public [string](https://www.php.net/language.types.string) [$dataColumnClass](/doc/api/2.0/yii-grid-gridview#$dataColumnClass-detail) = null
:::

```php
$emptyCell public property 
```

The HTML display when the content of a cell is empty. This property is used to render cells that have no defined content, e.g. empty footer or filter cells.

Note that this is not used by the [yii\grid\DataColumn](/doc/api/2.0/yii-grid-datacolumn) if a data item is null. In that case the [nullDisplay](/doc/api/2.0/yii-i18n-formatter#$nullDisplay-detail) property of the [$formatter](/doc/api/2.0/yii-grid-gridview#$formatter-detail) will be used to indicate an empty data value.

::: tip _
public [string](https://www.php.net/language.types.string) [$emptyCell](/doc/api/2.0/yii-grid-gridview#$emptyCell-detail) = '&nbsp;'
:::

```php
$filterErrorOptions public property 
```

The options for rendering every filter error message. This is mainly used by [yii\helpers\Html::error()](/doc/api/2.0/yii-helpers-basehtml#error\(\)-detail) when rendering an error message next to every filter input field.

::: tip _
public [array](https://www.php.net/language.types.array) [$filterErrorOptions](/doc/api/2.0/yii-grid-gridview#$filterErrorOptions-detail) = [
'class' => 'help-block',
]
:::

```php
$filterErrorSummaryOptions public property 
```

The options for rendering the filter error summary. Please refer to [yii\helpers\Html::errorSummary()](/doc/api/2.0/yii-helpers-basehtml#errorSummary\(\)-detail) for more details about how to specify the options.

See also [renderErrors()](/doc/api/2.0/yii-grid-gridview#renderErrors\(\)-detail).

::: tip _
public [array](https://www.php.net/language.types.array) [$filterErrorSummaryOptions](/doc/api/2.0/yii-grid-gridview#$filterErrorSummaryOptions-detail) = [
'class' => 'error-summary',
]
:::

```php
$filterModel public property 
```

The model that keeps the user-entered filter data. When this property is set, the grid view will enable column-based filtering. Each data column by default will display a text field at the top that users can fill in to filter the data.

Note that in order to show an input field for filtering, a column must have its [yii\grid\DataColumn::$attribute](/doc/api/2.0/yii-grid-datacolumn#$attribute-detail) property set and the attribute should be active in the current scenario of $filterModel or have [yii\grid\DataColumn::$filter](/doc/api/2.0/yii-grid-datacolumn#$filter-detail) set as the HTML code for the input field.

When this property is not set (null) the filtering feature is disabled.

::: tip _
public [yii\base\Model](/doc/api/2.0/yii-base-model)|[null](https://www.php.net/language.types.null) [$filterModel](/doc/api/2.0/yii-grid-gridview#$filterModel-detail) = null
:::

```php
$filterOnFocusOut public property (available since version 2.0.16) 
```

Whatever to apply filters on losing focus. Leaves an ability to manage filters via yiiGridView JS

::: tip _
public [boolean](https://www.php.net/language.types.boolean) [$filterOnFocusOut](/doc/api/2.0/yii-grid-gridview#$filterOnFocusOut-detail) = true
:::

```php
$filterPosition public property 
```

Whether the filters should be displayed in the grid view. Valid values include:

- [FILTER_POS_HEADER](/doc/api/2.0/yii-grid-gridview#FILTER_POS_HEADER-detail): the filters will be displayed on top of each column's header cell.
- [FILTER_POS_BODY](/doc/api/2.0/yii-grid-gridview#FILTER_POS_BODY-detail): the filters will be displayed right below each column's header cell.
- [FILTER_POS_FOOTER](/doc/api/2.0/yii-grid-gridview#FILTER_POS_FOOTER-detail): the filters will be displayed below each column's footer cell.

::: tip _
public [string](https://www.php.net/language.types.string) [$filterPosition](/doc/api/2.0/yii-grid-gridview#$filterPosition-detail) = self::FILTER\_POS\_BODY
:::

```php
$filterRowOptions public property 
```

The HTML attributes for the filter row element.

See also [yii\helpers\Html::renderTagAttributes()](/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes\(\)-detail) for details on how attributes are being rendered.

::: tip _
public [array](https://www.php.net/language.types.array) [$filterRowOptions](/doc/api/2.0/yii-grid-gridview#$filterRowOptions-detail) = [
'class' => 'filters',
]
:::

```php
$filterSelector public property 
```

Additional jQuery selector for selecting filter input fields

::: tip _
public [string](https://www.php.net/language.types.string) [$filterSelector](/doc/api/2.0/yii-grid-gridview#$filterSelector-detail) = null
:::

```php
$filterUrl public property 
```

The URL for returning the filtering result. [yii\helpers\Url::to()](/doc/api/2.0/yii-helpers-baseurl#to\(\)-detail) will be called to normalize the URL. If not set, the current controller action will be used. When the user makes change to any filter input, the current filtering inputs will be appended as GET parameters to this URL.

::: tip _
public [string](https://www.php.net/language.types.string)|[array](https://www.php.net/language.types.array)|[null](https://www.php.net/language.types.null) [$filterUrl](/doc/api/2.0/yii-grid-gridview#$filterUrl-detail) = null
:::

```php
$footerRowOptions public property 
```

The HTML attributes for the table footer row.

See also [yii\helpers\Html::renderTagAttributes()](/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes\(\)-detail) for details on how attributes are being rendered.

::: tip _
public [array](https://www.php.net/language.types.array) [$footerRowOptions](/doc/api/2.0/yii-grid-gridview#$footerRowOptions-detail) = []
:::

```php
$formatter public property 
```

The formatter used to format model attribute values into displayable texts. This can be either an instance of [yii\i18n\Formatter](/doc/api/2.0/yii-i18n-formatter) or an configuration array for creating the [yii\i18n\Formatter](/doc/api/2.0/yii-i18n-formatter) instance. If this property is not set, the "formatter" application component will be used.

::: tip _
public [array](https://www.php.net/language.types.array)|[yii\i18n\Formatter](/doc/api/2.0/yii-i18n-formatter)|[null](https://www.php.net/language.types.null) [$formatter](/doc/api/2.0/yii-grid-gridview#$formatter-detail) = null
:::

```php
$headerRowOptions public property 
```

The HTML attributes for the table header row.

See also [yii\helpers\Html::renderTagAttributes()](/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes\(\)-detail) for details on how attributes are being rendered.

::: tip _
public [array](https://www.php.net/language.types.array) [$headerRowOptions](/doc/api/2.0/yii-grid-gridview#$headerRowOptions-detail) = []
:::

```php
$layout public property 
```

The layout that determines how different sections of the grid view should be organized. The following tokens will be replaced with the corresponding section contents:

- {summary}: the summary section. See [renderSummary()](/doc/api/2.0/yii-widgets-baselistview#renderSummary\(\)-detail).
- {errors}: the filter model error summary. See [renderErrors()](/doc/api/2.0/yii-grid-gridview#renderErrors\(\)-detail).
- {items}: the list items. See [renderItems()](/doc/api/2.0/yii-grid-gridview#renderItems\(\)-detail).
- {sorter}: the sorter. See [renderSorter()](/doc/api/2.0/yii-widgets-baselistview#renderSorter\(\)-detail).
- {pager}: the pager. See [renderPager()](/doc/api/2.0/yii-widgets-baselistview#renderPager\(\)-detail).

::: tip _
public [string](https://www.php.net/language.types.string) [$layout](/doc/api/2.0/yii-grid-gridview#$layout-detail) = "{summary}\n{items}\n{pager}"
:::

```php
$options public property 
```

The HTML attributes for the container tag of the grid view. The "tag" element specifies the tag name of the container element and defaults to "div".

See also [yii\helpers\Html::renderTagAttributes()](/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes\(\)-detail) for details on how attributes are being rendered.

::: tip _
public [array](https://www.php.net/language.types.array) [$options](/doc/api/2.0/yii-grid-gridview#$options-detail) = [
'class' => 'grid-view',
]
:::


```php
$placeFooterAfterBody public property (available since version 2.0.14) 
```

Whether to place footer after body in DOM if $showFooter is true

::: tip _
public [boolean](https://www.php.net/language.types.boolean) [$placeFooterAfterBody](/doc/api/2.0/yii-grid-gridview#$placeFooterAfterBody-detail) = false
:::

```php
$rowOptions public property 
```

The HTML attributes for the table body rows. This can be either an array specifying the common HTML attributes for all body rows, or an anonymous function that returns an array of the HTML attributes. The anonymous function will be called once for every data model returned by [$dataProvider](/doc/api/2.0/yii-widgets-baselistview#$dataProvider-detail). It should have the following signature:

function ($model, $key, $index, $grid)

- $model: the current data model being rendered
- $key: the key value associated with the current data model
- $index: the zero-based index of the data model in the model array returned by [$dataProvider](/doc/api/2.0/yii-widgets-baselistview#$dataProvider-detail)
- $grid: the GridView object

See also [yii\helpers\Html::renderTagAttributes()](/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes\(\)-detail) for details on how attributes are being rendered.

::: tip _
public [array](https://www.php.net/language.types.array)|[Closure](https://www.php.net/class.closure) [$rowOptions](/doc/api/2.0/yii-grid-gridview#$rowOptions-detail) = []
:::

```php
$showFooter public property 
```

Whether to show the footer section of the grid table.

::: tip _
public [boolean](https://www.php.net/language.types.boolean) [$showFooter](/doc/api/2.0/yii-grid-gridview#$showFooter-detail) = false
:::

```php
$showHeader public property 
```

Whether to show the header section of the grid table.

::: tip _
public [boolean](https://www.php.net/language.types.boolean) [$showHeader](/doc/api/2.0/yii-grid-gridview#$showHeader-detail) = true
:::

```php
$showOnEmpty public property 
```

Whether to show the grid view if [$dataProvider](/doc/api/2.0/yii-widgets-baselistview#$dataProvider-detail) returns no data.

::: tip _
public [boolean](https://www.php.net/language.types.boolean) [$showOnEmpty](/doc/api/2.0/yii-grid-gridview#$showOnEmpty-detail) = true
:::

```php
$tableOptions public property 
```

The HTML attributes for the grid table element.

See also [yii\helpers\Html::renderTagAttributes()](/doc/api/2.0/yii-helpers-basehtml#renderTagAttributes\(\)-detail) for details on how attributes are being rendered.

::: tip _
public [array](https://www.php.net/language.types.array) [$tableOptions](/doc/api/2.0/yii-grid-gridview#$tableOptions-detail) = [
    'class' => 'table table-striped table-bordered',
]
:::

## **Method Details**

```php
__call() public method 
```

**Defined in:** [yii\base\Component::__call()](/doc/api/2.0/yii-base-component#__call\(\)-detail)

**Calls the named method which is not a class method.**

This method will check if any attached behavior has the named method and will execute it if available.

Do not call this method directly as it is a PHP magic method that will be implicitly called when an unknown method is being invoked.

|public | mixed | [**__call**](/doc/api/2.0/yii-base-component#__call\(\)-detail) ( $name, $params )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The method name|
|$params|[array](https://www.php.net/language.types.array)|Method parameters|
|**return**|mixed|The method return value|
|**throws**|[yii\base\UnknownMethodException](/doc/api/2.0/yii-base-unknownmethodexception)|when calling unknown method|

 

```php
public function \_\_call($name, $params)
{
    $this->ensureBehaviors();
    foreach ($this->\_behaviors as $object) {
        if ($object->hasMethod($name)) {
            return call\_user\_func\_array([$object, $name], $params);
        }
    }
    throw new UnknownMethodException('Calling unknown method: ' . get\_class($this) . "::$name()");
}
```

```php
__clone() public method 
```

**Defined in:** [yii\base\Component::__clone()](/doc/api/2.0/yii-base-component#__clone\(\)-detail)

**This method is called after the object is created by cloning an existing one.**

It removes all behaviors because they are attached to the old object.

|public void [**__clone**](/doc/api/2.0/yii-base-component#__clone\(\)-detail) ( )|
| :- |

 

```php
public function \_\_clone()
{
    $this->\_events = [];
    $this->\_eventWildcards = [];
    $this->\_behaviors = null;
}
```

```php
__construct() public method 
```

**Defined in:** [yii\base\BaseObject::__construct()](/doc/api/2.0/yii-base-baseobject#__construct\(\)-detail)

**Constructor.**

The default implementation does two things:

- Initializes the object with the given configuration $config.
- Call [init()](/doc/api/2.0/yii-base-baseobject#init\(\)-detail).

If this method is overridden in a child class, it is recommended that

- the last parameter of the constructor is a configuration array, like $config here.
- call the parent implementation at the end of the constructor.

|public | void | [**__construct**](/doc/api/2.0/yii-base-baseobject#__construct\(\)-detail) ( $config = [] )|
| :- | :- | :- |
|$config|[array](https://www.php.net/language.types.array)|Name-value pairs that will be used to initialize the object properties|

 

```php
public function __construct($config = [])
{
    if (!empty($config)) {
        Yii::configure($this, $config);
    }
    $this->init();
}
```

```php
__get() public method 
```

**Defined in:** [yii\base\Component::__get()](/doc/api/2.0/yii-base-component#__get\(\)-detail)

**Returns the value of a component property.**

This method will check in the following order and act accordingly:

- a property defined by a getter: return the getter result
- a property of a behavior: return the behavior property value

Do not call this method directly as it is a PHP magic method that will be implicitly called when executing $value = $component->property;.

See also [__set()](/doc/api/2.0/yii-base-component#__set\(\)-detail).

|public | mixed | [**__get**](/doc/api/2.0/yii-base-component#__get\(\)-detail) ( $name )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The property name|
|**return**|mixed|The property value or the value of a behavior's property|
|**throws**|[yii\base\UnknownPropertyException](/doc/api/2.0/yii-base-unknownpropertyexception)|if the property is not defined|
|**throws**|[yii\base\InvalidCallException](/doc/api/2.0/yii-base-invalidcallexception)|if the property is write-only.|

 

```php
public function \_\_get($name)
{
    $getter = 'get' . $name;
    if (method\_exists($this, $getter)) {
        // read property, e.g. getName()
        return $this->$getter();
    }
    // behavior property
    $this->ensureBehaviors();
    foreach ($this->\_behaviors as $behavior) {
        if ($behavior->canGetProperty($name)) {
            return $behavior->$name;
        }
    }
    if (method\_exists($this, 'set' . $name)) {
        throw new InvalidCallException('Getting write-only property: ' . get\_class($this) . '::' . $name);
    }
    throw new UnknownPropertyException('Getting unknown property: ' . get\_class($this) . '::' . $name);
}
```

```php
__isset() public method 
```

**Defined in:** [yii\base\Component::__isset()](/doc/api/2.0/yii-base-component#__isset\(\)-detail)

**Checks if a property is set, i.e. defined and not null.**

This method will check in the following order and act accordingly:

- a property defined by a setter: return whether the property is set
- a property of a behavior: return whether the property is set
- return false for non existing properties

Do not call this method directly as it is a PHP magic method that will be implicitly called when executing isset($component->property).

See also <https://www.php.net/manual/en/function.isset.php>.

|public | [boolean](https://www.php.net/language.types.boolean) | [**__isset**](/doc/api/2.0/yii-base-component#__isset\(\)-detail) ( $name )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The property name or the event name|
|**return**|[boolean](https://www.php.net/language.types.boolean)|Whether the named property is set|

 

```php
public function __isset($name)
{
    $getter = 'get' . $name;
    if (method\_exists($this, $getter)) {
        return $this->$getter() !== null;
    }
    // behavior property
    $this->ensureBehaviors();
    foreach ($this->\_behaviors as $behavior) {
        if ($behavior->canGetProperty($name)) {
            return $behavior->$name !== null;
        }
    }
    return false;
}
```

```php
__set() public method 
```

**Defined in:** [yii\base\Component::__set()](/doc/api/2.0/yii-base-component#__set\(\)-detail)

**Sets the value of a component property.**

This method will check in the following order and act accordingly:

- a property defined by a setter: set the property value
- an event in the format of "on xyz": attach the handler to the event "xyz"
- a behavior in the format of "as xyz": attach the behavior named as "xyz"
- a property of a behavior: set the behavior property value

Do not call this method directly as it is a PHP magic method that will be implicitly called when executing $component->property = $value;.

See also [__get()](/doc/api/2.0/yii-base-component#__get\(\)-detail).

|public | void | [**__set**](/doc/api/2.0/yii-base-component#__set\(\)-detail) ( $name, $value )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The property name or the event name|
|$value|mixed|The property value|
|**throws**|[yii\base\UnknownPropertyException](/doc/api/2.0/yii-base-unknownpropertyexception)|if the property is not defined|
|**throws**|[yii\base\InvalidCallException](/doc/api/2.0/yii-base-invalidcallexception)|if the property is read-only.|

 

```php
public function __set($name, $value)
{
    $setter = 'set' . $name;
    if (method\_exists($this, $setter)) {
        // set property
        $this->$setter($value);
        return;
    } elseif (strncmp($name, 'on ', 3) === 0) {
        // on event: attach event handler
        $this->on(trim(substr($name, 3)), $value);
        return;
    } elseif (strncmp($name, 'as ', 3) === 0) {
        // as behavior: attach behavior
        $name = trim(substr($name, 3));
        $this->attachBehavior($name, $value instanceof Behavior ? $value : Yii::createObject($value));
        return;
    }
    // behavior property
    $this->ensureBehaviors();
    foreach ($this->\_behaviors as $behavior) {
        if ($behavior->canSetProperty($name)) {
            $behavior->$name = $value;
            return;
        }
    }
    if (method\_exists($this, 'get' . $name)) {
        throw new InvalidCallException('Setting read-only property: ' . get\_class($this) . '::' . $name);
    }
    throw new UnknownPropertyException('Setting unknown property: ' . get\_class($this) . '::' . $name);
}
```

```php
__unset() public method 
```

**Defined in:** [yii\base\Component::__unset()](/doc/api/2.0/yii-base-component#__unset\(\)-detail)

**Sets a component property to be null.**

This method will check in the following order and act accordingly:

- a property defined by a setter: set the property value to be null
- a property of a behavior: set the property value to be null

Do not call this method directly as it is a PHP magic method that will be implicitly called when executing unset($component->property).

See also <https://www.php.net/manual/en/function.unset.php>.

|public | void | [**__unset**](/doc/api/2.0/yii-base-component#__unset\(\)-detail) ( $name )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The property name|
|**throws**|[yii\base\InvalidCallException](/doc/api/2.0/yii-base-invalidcallexception)|if the property is read only.|

 

```php
public function __unset($name)
{
    $setter = 'set' . $name;
    if (method\_exists($this, $setter)) {
        $this->$setter(null);
        return;
    }
    // behavior property
    $this->ensureBehaviors();
    foreach ($this->\_behaviors as $behavior) {
        if ($behavior->canSetProperty($name)) {
            $behavior->$name = null;
            return;
        }
    }
    throw new InvalidCallException('Unsetting an unknown or read-only property: ' . get\_class($this) . '::' . $name);
}
```

```php
afterRun() public method (available since version 2.0.11) 
```

**Defined in:** [yii\base\Widget::afterRun()](/doc/api/2.0/yii-base-widget#afterRun\(\)-detail)

**This method is invoked right after a widget is executed.**

The method will trigger the [EVENT_AFTER_RUN](/doc/api/2.0/yii-base-widget#EVENT_AFTER_RUN-detail) event. The return value of the method will be used as the widget return value.

If you override this method, your code should look like the following:

```php
public function afterRun($result)
{
    $result = parent::afterRun($result);
    // your custom code here
    return $result;
}
```

|public | mixed | [**afterRun**](/doc/api/2.0/yii-base-widget#afterRun\(\)-detail) ( $result )|
| :- | :- | :- |
|$result|mixed|The widget return result.|
|**return**|mixed|The processed widget result.|

 

```php
public function afterRun($result)
{
    $event = new WidgetEvent();
    $event->result = $result;
    $this->trigger(self::EVENT\_AFTER\_RUN, $event);
    return $event->result;
}
```


```php
attachBehavior() public method 
```

**Defined in:** [yii\base\Component::attachBehavior()](/doc/api/2.0/yii-base-component#attachBehavior\(\)-detail)

**Attaches a behavior to this component.**

This method will create the behavior object based on the given configuration. After that, the behavior object will be attached to this component by calling the [yii\base\Behavior::attach()](/doc/api/2.0/yii-base-behavior#attach\(\)-detail) method.

See also [detachBehavior()](/doc/api/2.0/yii-base-component#detachBehavior\(\)-detail).

|public | [yii\base\Behavior](/doc/api/2.0/yii-base-behavior) | [**attachBehavior**](/doc/api/2.0/yii-base-component#attachBehavior\(\)-detail) ( $name, $behavior )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The name of the behavior.|
|$behavior|[string](https://www.php.net/language.types.string)|[array](https://www.php.net/language.types.array)|[yii\base\Behavior](/doc/api/2.0/yii-base-behavior)|<p>The behavior configuration. This can be one of the following:</p><p>- a [yii\base\Behavior](/doc/api/2.0/yii-base-behavior) object</p><p>- a string specifying the behavior class</p><p>- an object configuration array that will be passed to [Yii::createObject()](/doc/api/2.0/yii-baseyii#createObject\(\)-detail) to create the behavior object.</p>|
|**return**|[yii\base\Behavior](/doc/api/2.0/yii-base-behavior)|The behavior object|

 

```php
public function attachBehavior($name, $behavior)
{
    $this->ensureBehaviors();
    return $this->attachBehaviorInternal($name, $behavior);
}
```

```php
attachBehaviors() public method 
```

**Defined in:** [yii\base\Component::attachBehaviors()](/doc/api/2.0/yii-base-component#attachBehaviors\(\)-detail)

**Attaches a list of behaviors to the component.**

Each behavior is indexed by its name and should be a [yii\base\Behavior](/doc/api/2.0/yii-base-behavior) object, a string specifying the behavior class, or an configuration array for creating the behavior.

See also [attachBehavior()](/doc/api/2.0/yii-base-component#attachBehavior\(\)-detail).

|public | void | [**attachBehaviors**](/doc/api/2.0/yii-base-component#attachBehaviors\(\)-detail) ( $behaviors )|
| :- | :- | :- |
|$behaviors|[array](https://www.php.net/language.types.array)|List of behaviors to be attached to the component|

 

```php
public function attachBehaviors($behaviors)
{
    $this->ensureBehaviors();
    foreach ($behaviors as $name => $behavior) {
        $this->attachBehaviorInternal($name, $behavior);
    }
}
```

```php
beforeRun() public method (available since version 2.0.11) 
```

**Defined in:** [yii\base\Widget::beforeRun()](/doc/api/2.0/yii-base-widget#beforeRun\(\)-detail)

**This method is invoked right before the widget is executed.**

The method will trigger the [EVENT_BEFORE_RUN](/doc/api/2.0/yii-base-widget#EVENT_BEFORE_RUN-detail) event. The return value of the method will determine whether the widget should continue to run.

When overriding this method, make sure you call the parent implementation like the following:

```php
public function beforeRun()
{
    if (!parent::beforeRun()) {
        return false;
    }
    // your custom code here
    return true; // or false to not run the widget
}
```

|public | [boolean](https://www.php.net/language.types.boolean) | [**beforeRun**](/doc/api/2.0/yii-base-widget#beforeRun\(\)-detail) ( )|
| :- | :- | :- |
|**return**|[boolean](https://www.php.net/language.types.boolean)|Whether the widget should continue to be executed.|

 

```php
public function beforeRun()
{
    $event = new WidgetEvent();
    $this->trigger(self::EVENT\_BEFORE\_RUN, $event);
    return $event->isValid;
}
```

```php
begin() public static method 
```

**Defined in:** [yii\base\Widget::begin()](/doc/api/2.0/yii-base-widget#begin\(\)-detail)

**Begins a widget.**

This method creates an instance of the calling class. It will apply the configuration to the created instance. A matching [end()](/doc/api/2.0/yii-base-widget#end\(\)-detail) call should be called later. As some widgets may use output buffering, the [end()](/doc/api/2.0/yii-base-widget#end\(\)-detail) call should be made in the same view to avoid breaking the nesting of output buffers.

See also [end()](/doc/api/2.0/yii-base-widget#end\(\)-detail).

|public | static | [**begin**](/doc/api/2.0/yii-base-widget#begin\(\)-detail) ( $config = [] )|
| :- | :- | :- |
|$config|[array](https://www.php.net/language.types.array)|Name-value pairs that will be used to initialize the object properties|
|**return**|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|The newly created widget instance|

 

```php
public static function begin($config = [])
{
    $config['class'] = get\_called\_class();
    /\* @var $widget Widget \*/
    $widget = Yii::createObject($config);
    self::$stack[] = $widget;
    return $widget;
}
```

```php
behaviors() public method 
```

**Defined in:** [yii\base\Component::behaviors()](/doc/api/2.0/yii-base-component#behaviors\(\)-detail)

**Returns a list of behaviors that this component should behave as.**

Child classes may override this method to specify the behaviors they want to behave as.

The return value of this method should be an array of behavior objects or configurations indexed by behavior names. A behavior configuration can be either a string specifying the behavior class or an array of the following structure:

```php
'behaviorName' => [
    'class' => 'BehaviorClass',
    'property1' => 'value1',
    'property2' => 'value2',
]
```

Note that a behavior class must extend from [yii\base\Behavior](/doc/api/2.0/yii-base-behavior). Behaviors can be attached using a name or anonymously. When a name is used as the array key, using this name, the behavior can later be retrieved using [getBehavior()](/doc/api/2.0/yii-base-component#getBehavior\(\)-detail) or be detached using [detachBehavior()](/doc/api/2.0/yii-base-component#detachBehavior\(\)-detail). Anonymous behaviors can not be retrieved or detached.

Behaviors declared in this method will be attached to the component automatically (on demand).

|public | [array](https://www.php.net/language.types.array) | [**behaviors**](/doc/api/2.0/yii-base-component#behaviors\(\)-detail) ()|
| :- | :- | :- |
|**return**|[array](https://www.php.net/language.types.array)|The behavior configurations.|

 
               
```php
public function behaviors()
{
    return [];
}
```


```php
canGetProperty() public method 
```

**Defined in:** [yii\base\Component::canGetProperty()](/doc/api/2.0/yii-base-component#canGetProperty\(\)-detail)

**Returns a value indicating whether a property can be read.**

A property can be read if:

- the class has a getter method associated with the specified name (in this case, property name is case-insensitive);
- the class has a member variable with the specified name (when $checkVars is true);
- an attached behavior has a readable property of the given name (when $checkBehaviors is true).

See also [canSetProperty()](/doc/api/2.0/yii-base-component#canSetProperty\(\)-detail).

|public | [boolean](https://www.php.net/language.types.boolean) | [**canGetProperty**](/doc/api/2.0/yii-base-component#canGetProperty\(\)-detail) ($name, $checkVars = true, $checkBehaviors = true)|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The property name|
|$checkVars|[boolean](https://www.php.net/language.types.boolean)|Whether to treat member variables as properties|
|$checkBehaviors|[boolean](https://www.php.net/language.types.boolean)|Whether to treat behaviors' properties as properties of this component|
|**return**|[boolean](https://www.php.net/language.types.boolean)|Whether the property can be read|

 

```php
public function canGetProperty($name, $checkVars = true, $checkBehaviors = true)
{
    if (method\_exists($this, 'get' . $name) || $checkVars && property\_exists($this, $name)) {
        return true;
    } elseif ($checkBehaviors) {
        $this->ensureBehaviors();
        foreach ($this->\_behaviors as $behavior) {
            if ($behavior->canGetProperty($name, $checkVars)) {
                return true;
            }
        }
    }
    return false;
}
```


```php
canSetProperty() public method
```

**Defined in:** [yii\base\Component::canSetProperty()](/doc/api/2.0/yii-base-component#canSetProperty\(\)-detail)

**Returns a value indicating whether a property can be set.**

A property can be written if:

- the class has a setter method associated with the specified name (in this case, property name is case-insensitive);
- the class has a member variable with the specified name (when $checkVars is true);
- an attached behavior has a writable property of the given name (when $checkBehaviors is true).

See also [canGetProperty()](/doc/api/2.0/yii-base-component#canGetProperty\(\)-detail).

|public | [boolean](https://www.php.net/language.types.boolean) | [**canSetProperty**](/doc/api/2.0/yii-base-component#canSetProperty\(\)-detail) ($name, $checkVars = true, $checkBehaviors = true)|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The property name|
|$checkVars|[boolean](https://www.php.net/language.types.boolean)|Whether to treat member variables as properties|
|$checkBehaviors|[boolean](https://www.php.net/language.types.boolean)|Whether to treat behaviors' properties as properties of this component|
|**return**|[boolean](https://www.php.net/language.types.boolean)|Whether the property can be written|

 

```php
public function canSetProperty($name, $checkVars = true, $checkBehaviors = true)
{
    if (method\_exists($this, 'set' . $name) || $checkVars && property\_exists($this, $name)) {
        return true;
    } elseif ($checkBehaviors) {
        $this->ensureBehaviors();
        foreach ($this->\_behaviors as $behavior) {
            if ($behavior->canSetProperty($name, $checkVars)) {
                return true;
            }
        }
    }
    return false;
}
```


```php
className() public static method
```

**Deprecated since 2.0.14. On PHP >=5.5, use ::class instead.** 

**Defined in:** [yii\base\BaseObject::className()](/doc/api/2.0/yii-base-baseobject#className\(\)-detail)

**Returns the fully qualified name of this class.**

|public static | [string](https://www.php.net/language.types.string) | [**className**](/doc/api/2.0/yii-base-baseobject#className\(\)-detail) ( )|
| :- | :- | :- |
|**return**|[string](https://www.php.net/language.types.string)|The fully qualified name of this class.|

 

```php
public static function className()
{
    return get\_called\_class();
}
```


```php
createDataColumn() protected method
``` 

**Creates a [yii\grid\DataColumn](/doc/api/2.0/yii-grid-datacolumn) object based on a string in the format of "attribute:format:label".**

|protected | [yii\grid\DataColumn](/doc/api/2.0/yii-grid-datacolumn) | [**createDataColumn**](/doc/api/2.0/yii-grid-gridview#createDataColumn\(\)-detail) ( $text )|
| :- | :- | :- |
|$text|[string](https://www.php.net/language.types.string)|The column specification string|
|**return**|[yii\grid\DataColumn](/doc/api/2.0/yii-grid-datacolumn)|The column instance|
|**throws**|[yii\base\InvalidConfigException](/doc/api/2.0/yii-base-invalidconfigexception)|if the column specification is invalid|

 

```php
protected function createDataColumn($text)
{
    if (!preg\_match('/^([^:]+)(:(\w\*))?(:(.\*))?$/', $text, $matches)) {
        throw new InvalidConfigException('The column must be specified in the format of "attribute", "attribute:format" or "attribute:format:label"');
    }
    return Yii::createObject([
        'class' => $this->dataColumnClass ?: DataColumn::className(),
        'grid' => $this,
        'attribute' => $matches[1],
        'format' => isset($matches[3]) ? $matches[3] : 'text',
        'label' => isset($matches[5]) ? $matches[5] : null,
    ]);
}
```


```php
detachBehavior() public method
``` 

**Defined in:** [yii\base\Component::detachBehavior()](/doc/api/2.0/yii-base-component#detachBehavior\(\)-detail)

**Detaches a behavior from the component.**

The behavior's [yii\base\Behavior::detach()](/doc/api/2.0/yii-base-behavior#detach\(\)-detail) method will be invoked.

::: tip _
public [yii\base\Behavior](/doc/api/2.0/yii-base-behavior) | [null](https://www.php.net/language.types.null) [**detachBehavior**](/doc/api/2.0/yii-base-component#detachBehavior\(\)-detail) ( $name )
:::


| $name | [string](https://www.php.net/language.types.string) | The behavior's name. |
| :- | :- | :- |
| **return** | [yii\base\Behavior](/doc/api/2.0/yii-base-behavior)`\`[null](https://www.php.net/language.types.null) | The detached behavior. Null if the behavior does not exist. |

 

```php
public function detachBehavior($name)
{
    $this->ensureBehaviors();
    if (isset($this->\_behaviors[$name])) {
        $behavior = $this->\_behaviors[$name];
        unset($this->\_behaviors[$name]);
        $behavior->detach();
        return $behavior;
    }
    return null;
}
```


```php
detachBehaviors() public method 
```

**Defined in:** [yii\base\Component::detachBehaviors()](/doc/api/2.0/yii-base-component#detachBehaviors\(\)-detail)

**Detaches all behaviors from the component.**

|public void [**detachBehaviors**](/doc/api/2.0/yii-base-component#detachBehaviors\(\)-detail) ( )|
| :- |

 

```php
public function detachBehaviors()
{
    $this->ensureBehaviors();
    foreach ($this->\_behaviors as $name => $behavior) {
        $this->detachBehavior($name);
    }
}
```


```php
end() public static method 
```

**Defined in:** [yii\base\Widget::end()](/doc/api/2.0/yii-base-widget#end\(\)-detail)

**Ends a widget.**

Note that the rendering result of the widget is directly echoed out.

See also [begin()](/doc/api/2.0/yii-base-widget#begin\(\)-detail).

|public | static | [**end**](/doc/api/2.0/yii-base-widget#end\(\)-detail) ( )|
| :- | :- | :- |
|**return**|[yii\base\Widget](/doc/api/2.0/yii-base-widget)|The widget instance that is ended.|
|**throws**|[yii\base\InvalidCallException](/doc/api/2.0/yii-base-invalidcallexception)|if [begin()](/doc/api/2.0/yii-base-widget#begin\(\)-detail) and [end()](/doc/api/2.0/yii-base-widget#end\(\)-detail) calls are not properly nested|

 

```php
public static function end()
{
    if (!empty(self::$stack)) {
        $widget = array\_pop(self::$stack);
        $calledClass = get\_called\_class();
        if (Yii::$container->has($calledClass) && isset(Yii::$container->getDefinitions()[$calledClass]['class'])) {
            $calledClass = Yii::$container->getDefinitions()[$calledClass]['class'];
        }
        if (get\_class($widget) === $calledClass) {
            /\* @var $widget Widget \*/
            if ($widget->beforeRun()) {
                $result = $widget->run();
                $result = $widget->afterRun($result);
                echo $result;
            }
            return $widget;
        }
        throw new InvalidCallException('Expecting end() of ' . get\_class($widget) . ', found ' . get\_called\_class());
    }
    throw new InvalidCallException('Unexpected ' . get\_called\_class() . '::end() call. A matching begin() is not found.');
}
```


```php
ensureBehaviors() public method
``` 

**Defined in:** [yii\base\Component::ensureBehaviors()](/doc/api/2.0/yii-base-component#ensureBehaviors\(\)-detail)

**Makes sure that the behaviors declared in [behaviors()](/doc/api/2.0/yii-base-component#behaviors\(\)-detail) are attached to this component.**

|public void [**ensureBehaviors**](/doc/api/2.0/yii-base-component#ensureBehaviors\(\)-detail) ( )|
| :- |

 

```php
public function ensureBehaviors()
{
    if ($this->\_behaviors === null) {
        $this->\_behaviors = [];
        foreach ($this->behaviors() as $name => $behavior) {
            $this->attachBehaviorInternal($name, $behavior);
        }
    }
}
```


```php
getBehavior() public method
``` 

**Defined in:** [yii\base\Component::getBehavior()](/doc/api/2.0/yii-base-component#getBehavior\(\)-detail)

**Returns the named behavior object.**

::: tip _
public [yii\base\Behavior](/doc/api/2.0/yii-base-behavior)|[null](https://www.php.net/language.types.null) [**getBehavior**](/doc/api/2.0/yii-base-component#getBehavior\(\)-detail) ( $name )
:::

|$name|[string](https://www.php.net/language.types.string)|The behavior name|
| :- | :- | :- |
|**return**|[yii\base\Behavior](/doc/api/2.0/yii-base-behavior)`\`[null](https://www.php.net/language.types.null)|The behavior object, or null if the behavior does not exist|

 

```php
public function getBehavior($name)
{
    $this->ensureBehaviors();
    return isset($this->\_behaviors[$name]) ? $this->\_behaviors[$name] : null;
}
```


```php
getBehaviors() public method
``` 

**Defined in:** [yii\base\Component::getBehaviors()](/doc/api/2.0/yii-base-component#getBehaviors\(\)-detail)

**Returns all behaviors attached to this component.**


| public     | [yii\base\Behavior](/doc/api/2.0/yii-base-behavior)[] | [**getBehaviors**](/doc/api/2.0/yii-base-component#getBehaviors\(\)-detail) () |
|------------|-------------------------------------------------------|----------------------------------------------|
| **return** | [yii\base\Behavior](/doc/api/2.0/yii-base-behavior)[] | List of behaviors attached to this component |

 

```php
public function getBehaviors()
{
    $this->ensureBehaviors();
    return $this->\_behaviors;
}
```


```php
getClientOptions() protected method
``` 

**Returns the options for the grid view JS widget.**

|protected | [array](https://www.php.net/language.types.array) | [**getClientOptions**](/doc/api/2.0/yii-grid-gridview#getClientOptions\(\)-detail) () |
| :- | :- | :- |
|**return**|[array](https://www.php.net/language.types.array)|The options|

 

```php
protected function getClientOptions()
{
    $filterUrl = isset($this->filterUrl) ? $this->filterUrl : Yii::$app->request->url;
    $id = $this->filterRowOptions['id'];
    $filterSelector = "#$id input, #$id select";
    if (isset($this->filterSelector)) {
        $filterSelector .= ', ' . $this->filterSelector;
    }
    return [
        'filterUrl' => Url::to($filterUrl),
        'filterSelector' => $filterSelector,
    ];
}
```


```php
getId() public method 
```

**Defined in:** [yii\base\Widget::getId()](/doc/api/2.0/yii-base-widget#getId\(\)-detail)

**Returns the ID of the widget.**


| public | [string](https://www.php.net/language.types.string)`\`[null](https://www.php.net/language.types.null) | [**getId**](/doc/api/2.0/yii-base-widget#getId\(\)-detail) ( $autoGenerate = true ) |
| :- | :- | :- |
|$autoGenerate|[boolean](https://www.php.net/language.types.boolean)|Whether to generate an ID if it is not set previously|
|**return**|[string](https://www.php.net/language.types.string)`\`[null](https://www.php.net/language.types.null)|ID of the widget.|

 

```php
public function getId($autoGenerate = true)
{
    if ($autoGenerate && $this->\_id === null) {
        $this->\_id = static::$autoIdPrefix . static::$counter++;
    }
    return $this->\_id;
}
```


```php
getView() public method 
```

**Defined in:** [yii\base\Widget::getView()](/doc/api/2.0/yii-base-widget#getView\(\)-detail)

**Returns the view object that can be used to render views or view files.**

The [render()](/doc/api/2.0/yii-base-widget#render\(\)-detail) and [renderFile()](/doc/api/2.0/yii-base-widget#renderFile\(\)-detail) methods will use this view object to implement the actual view rendering. If not set, it will default to the "view" application component.

|public | [yii\web\View](/doc/api/2.0/yii-web-view) | [**getView**](/doc/api/2.0/yii-base-widget#getView\(\)-detail) () |
| :- | :- | :- |
|**return**|[yii\web\View](/doc/api/2.0/yii-web-view)|The view object that can be used to render views or view files.|

 

```php
public function getView()
{
    if ($this->\_view === null) {
        $this->\_view = Yii::$app->getView();
    }
    return $this->\_view;
}
```


```php
getViewPath() public method
``` 

**Defined in:** [yii\base\Widget::getViewPath()](/doc/api/2.0/yii-base-widget#getViewPath\(\)-detail)

**Returns the directory containing the view files for this widget.**

The default implementation returns the 'views' subdirectory under the directory containing the widget class file.

|public | [string](https://www.php.net/language.types.string) | [**getViewPath**](/doc/api/2.0/yii-base-widget#getViewPath\(\)-detail) () |
| :- | :- | :- |
|**return**|[string](https://www.php.net/language.types.string)|The directory containing the view files for this widget.|

 

```php
public function getViewPath()
{
    $class = new ReflectionClass($this);
    return dirname($class->getFileName()) . DIRECTORY\_SEPARATOR . 'views';
}
```


```php
guessColumns() protected method
``` 

**This function tries to guess the columns to show from the given data if [$columns](/doc/api/2.0/yii-grid-gridview#$columns-detail) are not explicitly specified.**

|protected void [**guessColumns**](/doc/api/2.0/yii-grid-gridview#guessColumns\(\)-detail) ( )|
| :- |

 

```php
protected function guessColumns()
{
    $models = $this->dataProvider->getModels();
    $model = reset($models);
    if (is\_array($model) || is\_object($model)) {
        foreach ($model as $name => $value) {
            if ($value === null || is\_scalar($value) || is\_callable([$value, '\_\_toString'])) {
                $this->columns[] = (string) $name;
            }
        }
    }
}
```


```php
hasEventHandlers() public method
``` 

**Defined in:** [yii\base\Component::hasEventHandlers()](/doc/api/2.0/yii-base-component#hasEventHandlers\(\)-detail)

**Returns a value indicating whether there is any handler attached to the named event.**

|public | [boolean](https://www.php.net/language.types.boolean) | [**hasEventHandlers**](/doc/api/2.0/yii-base-component#hasEventHandlers\(\)-detail) ( $name ) |
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The event name|
|**return**|[boolean](https://www.php.net/language.types.boolean)|Whether there is any handler attached to the event.|

 

```php
public function hasEventHandlers($name)
{
    $this->ensureBehaviors();
    if (!empty($this->\_events[$name])) {
        return true;
    }
    foreach ($this->\_eventWildcards as $wildcard => $handlers) {
        if (!empty($handlers) && StringHelper::matchWildcard($wildcard, $name)) {
            return true;
        }
    }
    return Event::hasHandlers($this, $name);
}
```


```php
hasMethod() public method
``` 

**Defined in:** [yii\base\Component::hasMethod()](/doc/api/2.0/yii-base-component#hasMethod\(\)-detail)

**Returns a value indicating whether a method is defined.**

A method is defined if:

- the class has a method with the specified name
- an attached behavior has a method with the given name (when $checkBehaviors is true).

|public | [boolean](https://www.php.net/language.types.boolean) | [**hasMethod**](/doc/api/2.0/yii-base-component#hasMethod\(\)-detail) ( $name, $checkBehaviors = true )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The property name|
|$checkBehaviors|[boolean](https://www.php.net/language.types.boolean)|Whether to treat behaviors' methods as methods of this component|
|**return**|[boolean](https://www.php.net/language.types.boolean)|Whether the method is defined|

 

```php
public function hasMethod($name, $checkBehaviors = true)
{
    if (method\_exists($this, $name)) {
        return true;
    } elseif ($checkBehaviors) {
        $this->ensureBehaviors();
        foreach ($this->\_behaviors as $behavior) {
            if ($behavior->hasMethod($name)) {
                return true;
            }
        }
    }
    return false;
}
```


```php
hasProperty() public method
``` 

**Defined in:** [yii\base\Component::hasProperty()](/doc/api/2.0/yii-base-component#hasProperty\(\)-detail)

**Returns a value indicating whether a property is defined for this component.**

A property is defined if:

- the class has a getter or setter method associated with the specified name (in this case, property name is case-insensitive);
- the class has a member variable with the specified name (when $checkVars is true);
- an attached behavior has a property of the given name (when $checkBehaviors is true).

See also:

- [canGetProperty()](/doc/api/2.0/yii-base-component#canGetProperty\(\)-detail)
- [canSetProperty()](/doc/api/2.0/yii-base-component#canSetProperty\(\)-detail)

|public | [boolean](https://www.php.net/language.types.boolean) | [**hasProperty**](/doc/api/2.0/yii-base-component#hasProperty\(\)-detail) ( $name, $checkVars = true, $checkBehaviors = true )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The property name|
|$checkVars|[boolean](https://www.php.net/language.types.boolean)|Whether to treat member variables as properties|
|$checkBehaviors|[boolean](https://www.php.net/language.types.boolean)|Whether to treat behaviors' properties as properties of this component|
|**return**|[boolean](https://www.php.net/language.types.boolean)|Whether the property is defined|

 

```php
public function hasProperty($name, $checkVars = true, $checkBehaviors = true)
{
    return $this->canGetProperty($name, $checkVars, $checkBehaviors) || $this->canSetProperty($name, false, $checkBehaviors);
}
```


```php
init() public method
``` 

**Initializes the grid view.**

This method will initialize required property values and instantiate [$columns](/doc/api/2.0/yii-grid-gridview#$columns-detail) objects.

|public void [**init**](/doc/api/2.0/yii-grid-gridview#init\(\)-detail) ( )|
| :- |

 

```php
public function init()
{
    parent::init();
    if ($this->formatter === null) {
        $this->formatter = Yii::$app->getFormatter();
    } elseif (is\_array($this->formatter)) {
        $this->formatter = Yii::createObject($this->formatter);
    }
    if (!$this->formatter instanceof Formatter) {
        throw new InvalidConfigException('The "formatter" property must be either a Format object or a configuration array.');
    }
    if (!isset($this->filterRowOptions['id'])) {
        $this->filterRowOptions['id'] = $this->options['id'] . '-filters';
    }
    $this->initColumns();
}
```


```php
initColumns() protected method
``` 

**Creates column objects and initializes them.**

|protected void [**initColumns**](/doc/api/2.0/yii-grid-gridview#initColumns\(\)-detail) ( )|
| :- |

 

```php
protected function initColumns()
{
    if (empty($this->columns)) {
        $this->guessColumns();
    }
    foreach ($this->columns as $i => $column) {
        if (is\_string($column)) {
            $column = $this->createDataColumn($column);
        } else {
            $column = Yii::createObject(array\_merge([
                'class' => $this->dataColumnClass ?: DataColumn::className(),
                'grid' => $this,
            ], $column));
        }
        if (!$column->visible) {
            unset($this->columns[$i]);
            continue;
        }
        $this->columns[$i] = $column;
    }
}
```


```php
off() public method
``` 

**Defined in:** [yii\base\Component::off()](/doc/api/2.0/yii-base-component#off\(\)-detail)

**Detaches an existing event handler from this component.**

This method is the opposite of [on()](/doc/api/2.0/yii-base-component#on\(\)-detail).

Note: in case wildcard pattern is passed for event name, only the handlers registered with this wildcard will be removed, while handlers registered with plain names matching this wildcard will remain.

See also [on()](/doc/api/2.0/yii-base-component#on\(\)-detail).

|public | [boolean](https://www.php.net/language.types.boolean) | [**off**](/doc/api/2.0/yii-base-component#off\(\)-detail) ( $name, $handler = null )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|Event name|
|$handler|[callable](https://www.php.net/language.types.callable)|[null](https://www.php.net/language.types.null)|The event handler to be removed. If it is null, all handlers attached to the named event will be removed.|
|**return**|[boolean](https://www.php.net/language.types.boolean)|If a handler is found and detached|

 

```php
public function off($name, $handler = null)
{
    $this->ensureBehaviors();
    if (empty($this->\_events[$name]) && empty($this->\_eventWildcards[$name])) {
        return false;
    }
    if ($handler === null) {
        unset($this->\_events[$name], $this->\_eventWildcards[$name]);
        return true;
    }
    $removed = false;
    // plain event names
    if (isset($this->\_events[$name])) {
        foreach ($this->\_events[$name] as $i => $event) {
            if ($event[0] === $handler) {
                unset($this->\_events[$name][$i]);
                $removed = true;
            }
        }
        if ($removed) {
            $this->\_events[$name] = array\_values($this->\_events[$name]);
            return true;
        }
    }
    // wildcard event names
    if (isset($this->\_eventWildcards[$name])) {
        foreach ($this->\_eventWildcards[$name] as $i => $event) {
            if ($event[0] === $handler) {
                unset($this->\_eventWildcards[$name][$i]);
                $removed = true;
            }
        }
        if ($removed) {
            $this->\_eventWildcards[$name] = array\_values($this->\_eventWildcards[$name]);
            // remove empty wildcards to save future redundant regex checks:
            if (empty($this->\_eventWildcards[$name])) {
                unset($this->\_eventWildcards[$name]);
            }
        }
    }
    return $removed;
}
```


```php
on() public method
``` 

**Defined in:** [yii\base\Component::on()](/doc/api/2.0/yii-base-component#on\(\)-detail)

**Attaches an event handler to an event.**

The event handler must be a valid PHP callback. The following are some examples:

```php
function ($event) { ... }         // anonymous function
[$object, 'handleClick']          // $object->handleClick()
['Page', 'handleClick']           // Page::handleClick()
'handleClick'                     // global function handleClick()
```

The event handler must be defined with the following signature,

```php
function ($event)
```

where `$event` is an [yii\base\Event](/doc/api/2.0/yii-base-event) object which includes parameters associated with the event.

Since 2.0.14 you can specify event name as a wildcard pattern:

```php
$component->on('event.group.\*', function ($event) {
    Yii::trace($event->name . ' is triggered.');
});
```

See also [off()](/doc/api/2.0/yii-base-component#off\(\)-detail).

|public | void |  [**on**](/doc/api/2.0/yii-base-component#on\(\)-detail)( $name, $handler, $data = null, $append = true )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The event name|
|$handler|[callable](https://www.php.net/language.types.callable)|The event handler|
|$data|mixed|The data to be passed to the event handler when the event is triggered. When the event handler is invoked, this data can be accessed via [yii\base\Event::$data](/doc/api/2.0/yii-base-event#$data-detail).|
|$append|[boolean](https://www.php.net/language.types.boolean)|Whether to append new event handler to the end of the existing handler list. If false, the new handler will be inserted at the beginning of the existing handler list.|

 

```php
public function on($name, $handler, $data = null, $append = true)
{
    $this->ensureBehaviors();
    if (strpos($name, '\*') !== false) {
        if ($append || empty($this->\_eventWildcards[$name])) {
            $this->\_eventWildcards[$name][] = [$handler, $data];
        } else {
            array\_unshift($this->\_eventWildcards[$name], [$handler, $data]);
        }
        return;
    }
    if ($append || empty($this->\_events[$name])) {
        $this->\_events[$name][] = [$handler, $data];
    } else {
        array\_unshift($this->\_events[$name], [$handler, $data]);
    }
}
```


```php
render() public method
``` 

**Defined in:** [yii\base\Widget::render()](/doc/api/2.0/yii-base-widget#render\(\)-detail)

**Renders a view.**

The view to be rendered can be specified in one of the following formats:

- [path alias](/doc/guide/2.0/en/concept-aliases) (e.g. "@app/views/site/index");
- absolute path within application (e.g. "//site/index"): the view name starts with double slashes. The actual view file will be looked for under the [view path](/doc/api/2.0/yii-base-module#$viewPath-detail) of the application.
- absolute path within module (e.g. "/site/index"): the view name starts with a single slash. The actual view file will be looked for under the [view path](/doc/api/2.0/yii-base-module#$viewPath-detail) of the currently active module.
- relative path (e.g. "index"): the actual view file will be looked for under [$viewPath](/doc/api/2.0/yii-base-widget#$viewPath-detail).

If the view name does not contain a file extension, it will use the default one .php.

|public | [string](https://www.php.net/language.types.string) | [**render**](/doc/api/2.0/yii-base-widget#render\(\)-detail) ( $view, $params = [] )|
| :- | :- | :- |
|$view|[string](https://www.php.net/language.types.string)|The view name.|
|$params|[array](https://www.php.net/language.types.array)|The parameters (name-value pairs) that should be made available in the view.|
|**return**|[string](https://www.php.net/language.types.string)|The rendering result.|
|**throws**|[yii\base\InvalidArgumentException](/doc/api/2.0/yii-base-invalidargumentexception)|if the view file does not exist.|

 

```php
public function render($view, $params = [])
{
    return $this->getView()->render($view, $params, $this);
}
```


```php
renderCaption() public method 
```

**Renders the caption element.**

|public | [boolean](https://www.php.net/language.types.boolean)|[string](https://www.php.net/language.types.string) [**renderCaption**](/doc/api/2.0/yii-grid-gridview#renderCaption\(\)-detail) () |
| :- | :- | :- |
|**return**|[boolean](https://www.php.net/language.types.boolean)`\`[string](https://www.php.net/language.types.string)|The rendered caption element or false if no caption element should be rendered.|

 

```php
public function renderCaption()
{
    if (!empty($this->caption)) {
        return Html::tag('caption', $this->caption, $this->captionOptions);
    }
    return false;
}
```


```php
renderColumnGroup() public method
``` 

**Renders the column group HTML.**

|public | [boolean](https://www.php.net/language.types.boolean)`\`[string](https://www.php.net/language.types.string) | [**renderColumnGroup**](/doc/api/2.0/yii-grid-gridview#renderColumnGroup\(\)-detail) () |
| :- | :- | :- |
|**return**|[boolean](https://www.php.net/language.types.boolean)|[string](https://www.php.net/language.types.string)|The column group HTML or false if no column group should be rendered.|

 

```php
public function renderColumnGroup()
{
    foreach ($this->columns as $column) {

        /\* @var $column Column \*/
        if (!empty($column->options)) {
            $cols = [];
            foreach ($this->columns as $col) {
                $cols[] = Html::tag('col', '', $col->options);
            }
            return Html::tag('colgroup', implode("\n", $cols));
        }
    }
    return false;
}
```


```php
renderEmpty() public method
``` 

**Defined in:** [yii\widgets\BaseListView::renderEmpty()](/doc/api/2.0/yii-widgets-baselistview#renderEmpty\(\)-detail)

**Renders the HTML content indicating that the list view has no data.**

See also [$emptyText](/doc/api/2.0/yii-widgets-baselistview#$emptyText-detail).

|public | [string](https://www.php.net/language.types.string) | [**renderEmpty**](/doc/api/2.0/yii-widgets-baselistview#renderEmpty\(\)-detail) () |
| :- | :- | :- |
|**return**|[string](https://www.php.net/language.types.string)|The rendering result|

 

```php
public function renderEmpty()
{
    if ($this->emptyText === false) {
        return '';
    }
    $options = $this->emptyTextOptions;
    $tag = ArrayHelper::remove($options, 'tag', 'div');
    return Html::tag($tag, $this->emptyText, $options);
}
```


```php
renderErrors() public method
``` 

**Renders validator errors of filter model.**

|public | [string](https://www.php.net/language.types.string) | [**renderErrors**](/doc/api/2.0/yii-grid-gridview#renderErrors\(\)-detail) () |
| :- | :- | :- |
|**return**|[string](https://www.php.net/language.types.string)|The rendering result.|

 

```php
public function renderErrors()
{
    if ($this->filterModel instanceof Model && $this->filterModel->hasErrors()) {
        return Html::errorSummary($this->filterModel, $this->filterErrorSummaryOptions);
    }
    return '';
}
```


```php
renderFile() public method 
```

**Defined in:** [yii\base\Widget::renderFile()](/doc/api/2.0/yii-base-widget#renderFile\(\)-detail)

**Renders a view file.**

|public | [string](https://www.php.net/language.types.string) | [**renderFile**](/doc/api/2.0/yii-base-widget#renderFile\(\)-detail) ( $file, $params = [] )|
| :- | :- | :- |
|$file|[string](https://www.php.net/language.types.string)|The view file to be rendered. This can be either a file path or a [path alias](/doc/guide/2.0/en/concept-aliases).|
|$params|[array](https://www.php.net/language.types.array)|The parameters (name-value pairs) that should be made available in the view.|
|**return**|[string](https://www.php.net/language.types.string)|The rendering result.|
|**throws**|[yii\base\InvalidArgumentException](/doc/api/2.0/yii-base-invalidargumentexception)|if the view file does not exist.|

 

```php
public function renderFile($file, $params = [])
{
    return $this->getView()->renderFile($file, $params, $this);
}
```


```php
renderFilters() public method
``` 

**Renders the filter.**

|public | [string](https://www.php.net/language.types.string) | [**renderFilters**](/doc/api/2.0/yii-grid-gridview#renderFilters\(\)-detail) ()|
| :- | :- | :- |
|**return**|[string](https://www.php.net/language.types.string)|The rendering result.|

 

```php
public function renderFilters()
{
    if ($this->filterModel !== null) {
        $cells = [];
        foreach ($this->columns as $column) {
            /\* @var $column Column \*/
            $cells[] = $column->renderFilterCell();
        }
        return Html::tag('tr', implode('', $cells), $this->filterRowOptions);
    }
    return '';
}
```


```php
renderItems() public method
``` 

**Renders the data models for the grid view.**

|public | [string](https://www.php.net/language.types.string) | [**renderItems**](/doc/api/2.0/yii-grid-gridview#renderItems\(\)-detail) ()|
| :- | :- | :- |
|**return**|[string](https://www.php.net/language.types.string)|The HTML code of table|

 

```php
public function renderItems()
{
    $caption = $this->renderCaption();
    $columnGroup = $this->renderColumnGroup();
    $tableHeader = $this->showHeader ? $this->renderTableHeader() : false;
    $tableBody = $this->renderTableBody();
    $tableFooter = false;
    $tableFooterAfterBody = false;
    if ($this->showFooter) {
        if ($this->placeFooterAfterBody) {
            $tableFooterAfterBody = $this->renderTableFooter();
        } else {
            $tableFooter = $this->renderTableFooter();
        }
    }
    $content = array\_filter([
        $caption,
        $columnGroup,
        $tableHeader,
        $tableFooter,
        $tableBody,
        $tableFooterAfterBody,
    ]);
    return Html::tag('table', implode("\n", $content), $this->tableOptions);
}
```


```php
renderPager() public method
``` 

**Defined in:** [yii\widgets\BaseListView::renderPager()](/doc/api/2.0/yii-widgets-baselistview#renderPager\(\)-detail)

**Renders the pager.**

|public | [string](https://www.php.net/language.types.string) | [**renderPager**](/doc/api/2.0/yii-widgets-baselistview#renderPager\(\)-detail) () |
| :- | :- | :- |
|**return**|[string](https://www.php.net/language.types.string)|The rendering result|

 

```php
public function renderPager()
{
    $pagination = $this->dataProvider->getPagination();
    if ($pagination === false || $this->dataProvider->getCount() <= 0) {
        return '';
    }
    /\* @var $class LinkPager \*/
    $pager = $this->pager;
    $class = ArrayHelper::remove($pager, 'class', LinkPager::className());
    $pager['pagination'] = $pagination;
    $pager['view'] = $this->getView();
    return $class::widget($pager);
}
```


```php
renderSection() public method
``` 

**Renders a section of the specified name.**

If the named section is not supported, false will be returned.

|public | [string](https://www.php.net/language.types.string)`\`[boolean](https://www.php.net/language.types.boolean) | [**renderSection**](/doc/api/2.0/yii-grid-gridview#renderSection\(\)-detail) ( $name )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The section name, e.g., {summary}, {items}.|
|**return**|[string](https://www.php.net/language.types.string)`\`[boolean](https://www.php.net/language.types.boolean)|The rendering result of the section, or false if the named section is not supported.|

 

```php
public function renderSection($name)
{
    switch ($name) {
        case '{errors}':
            return $this->renderErrors();
        default:
            return parent::renderSection($name);
    }
}
```


```php
renderSorter() public method
``` 

**Defined in:** [yii\widgets\BaseListView::renderSorter()](/doc/api/2.0/yii-widgets-baselistview#renderSorter\(\)-detail)

**Renders the sorter.**

|public | [string](https://www.php.net/language.types.string) | [**renderSorter**](/doc/api/2.0/yii-widgets-baselistview#renderSorter\(\)-detail) () |
| :- | :- | :- |
|**return**|[string](https://www.php.net/language.types.string)|The rendering result|

 

```php
public function renderSorter()
{
    $sort = $this->dataProvider->getSort();
    if ($sort === false || empty($sort->attributes) || $this->dataProvider->getCount() <= 0) {
        return '';
    }
    /\* @var $class LinkSorter \*/
    $sorter = $this->sorter;
    $class = ArrayHelper::remove($sorter, 'class', LinkSorter::className());
    $sorter['sort'] = $sort;
    $sorter['view'] = $this->getView();
    return $class::widget($sorter);
}
```


```php
renderSummary() public method
``` 

**Defined in:** [yii\widgets\BaseListView::renderSummary()](/doc/api/2.0/yii-widgets-baselistview#renderSummary\(\)-detail)

**Renders the summary text.**

|public void [**renderSummary**](/doc/api/2.0/yii-widgets-baselistview#renderSummary\(\)-detail) ( )|
| :- |

 

```php
public function renderSummary()
{
    $count = $this->dataProvider->getCount();
    if ($count <= 0) {
        return '';
    }
    $summaryOptions = $this->summaryOptions;
    $tag = ArrayHelper::remove($summaryOptions, 'tag', 'div');
    if (($pagination = $this->dataProvider->getPagination()) !== false) {
        $totalCount = $this->dataProvider->getTotalCount();
        $begin = $pagination->getPage() \* $pagination->pageSize + 1;
        $end = $begin + $count - 1;
        if ($begin > $end) {
            $begin = $end;
        }
        $page = $pagination->getPage() + 1;
        $pageCount = $pagination->pageCount;
        if (($summaryContent = $this->summary) === null) {
            return Html::tag($tag, Yii::t('yii', 'Showing <b>{begin, number}-{end, number}</b> of <b>{totalCount, number}</b> {totalCount, plural, one{item} other{items}}.', [
                    'begin' => $begin,
                    'end' => $end,
                    'count' => $count,
                    'totalCount' => $totalCount,
                    'page' => $page,
                    'pageCount' => $pageCount,
                ]), $summaryOptions);
        }
    } else {
        $begin = $page = $pageCount = 1;
        $end = $totalCount = $count;
        if (($summaryContent = $this->summary) === null) {
            return Html::tag($tag, Yii::t('yii', 'Total <b>{count, number}</b> {count, plural, one{item} other{items}}.', [
                'begin' => $begin,
                'end' => $end,
                'count' => $count,
                'totalCount' => $totalCount,
                'page' => $page,
                'pageCount' => $pageCount,
            ]), $summaryOptions);
        }
    }
    if ($summaryContent === '') {
        return '';
    }
    return Html::tag($tag, Yii::$app->getI18n()->format($summaryContent, [
        'begin' => $begin,
        'end' => $end,
        'count' => $count,
        'totalCount' => $totalCount,
        'page' => $page,
        'pageCount' => $pageCount,
    ], Yii::$app->language), $summaryOptions);
}
```


```php
renderTableBody() public method
``` 

**Renders the table body.**

|public | [string](https://www.php.net/language.types.string) | [**renderTableBody**](/doc/api/2.0/yii-grid-gridview#renderTableBody\(\)-detail) () |
| :- | :- | :- |
|**return**|[string](https://www.php.net/language.types.string)|The rendering result.|

 

```php
public function renderTableBody()
{
    $models = array\_values($this->dataProvider->getModels());
    $keys = $this->dataProvider->getKeys();
    $rows = [];
    foreach ($models as $index => $model) {
        $key = $keys[$index];
        if ($this->beforeRow !== null) {
            $row = call\_user\_func($this->beforeRow, $model, $key, $index, $this);
            if (!empty($row)) {
                $rows[] = $row;
            }
        }
        $rows[] = $this->renderTableRow($model, $key, $index);
        if ($this->afterRow !== null) {
            $row = call\_user\_func($this->afterRow, $model, $key, $index, $this);
            if (!empty($row)) {
                $rows[] = $row;
            }
        }
    }
    if (empty($rows) && $this->emptyText !== false) {
        $colspan = count($this->columns);
        return "<tbody>\n<tr><td colspan=\"$colspan\">" . $this->renderEmpty() . "</td></tr>\n</tbody>";
    }
    return "<tbody>\n" . implode("\n", $rows) . "\n</tbody>";
}
```


```php
renderTableFooter() public method
``` 

**Renders the table footer.**

|public | [string](https://www.php.net/language.types.string) | [**renderTableFooter**](/doc/api/2.0/yii-grid-gridview#renderTableFooter\(\)-detail) () |
| :- | :- | :- |
|**return**|[string](https://www.php.net/language.types.string)|The rendering result.|

 

```php
public function renderTableFooter()
{
    $cells = [];
    foreach ($this->columns as $column) {
        /\* @var $column Column \*/
        $cells[] = $column->renderFooterCell();
    }
    $content = Html::tag('tr', implode('', $cells), $this->footerRowOptions);
    if ($this->filterPosition === self::FILTER\_POS\_FOOTER) {
        $content .= $this->renderFilters();
    }
    return "<tfoot>\n" . $content . "\n</tfoot>";
}
```


```php
renderTableHeader() public method 
```

**Renders the table header.**

|public | [string](https://www.php.net/language.types.string) | [**renderTableHeader**](/doc/api/2.0/yii-grid-gridview#renderTableHeader\(\)-detail) () |
| :- | :- | :- |
|**return**|[string](https://www.php.net/language.types.string)|The rendering result.|

 

```php
public function renderTableHeader()
{
    $cells = [];
    foreach ($this->columns as $column) {
        /\* @var $column Column \*/
        $cells[] = $column->renderHeaderCell();
    }
    $content = Html::tag('tr', implode('', $cells), $this->headerRowOptions);
    if ($this->filterPosition === self::FILTER\_POS\_HEADER) {
        $content = $this->renderFilters() . $content;
    } elseif ($this->filterPosition === self::FILTER\_POS\_BODY) {
        $content .= $this->renderFilters();
    }
    return "<thead>\n" . $content . "\n</thead>";
}
```


```php
renderTableRow() public method
``` 

**Renders a table row with the given data model and key.**

|public | [string](https://www.php.net/language.types.string) | [**renderTableRow**](/doc/api/2.0/yii-grid-gridview#renderTableRow\(\)-detail) ( $model, $key, $index ) |
| :- | :- | :- |
|$model|mixed|The data model to be rendered|
|$key|mixed|The key associated with the data model|
|$index|[integer](https://www.php.net/language.types.integer)|The zero-based index of the data model among the model array returned by [$dataProvider](/doc/api/2.0/yii-widgets-baselistview#$dataProvider-detail).|
|**return**|[string](https://www.php.net/language.types.string)|The rendering result|

 

```php
public function renderTableRow($model, $key, $index)
{
    $cells = [];
    /\* @var $column Column \*/
    foreach ($this->columns as $column) {
        $cells[] = $column->renderDataCell($model, $key, $index);
    }
    if ($this->rowOptions instanceof Closure) {
        $options = call\_user\_func($this->rowOptions, $model, $key, $index, $this);
    } else {
        $options = $this->rowOptions;
    }
    $options['data-key'] = is\_array($key) ? json\_encode($key) : (string) $key;
    return Html::tag('tr', implode('', $cells), $options);
}
```


```php
run() public method
``` 

**Runs the widget.**

|public void [**run**](/doc/api/2.0/yii-grid-gridview#run\(\)-detail) ( )|
| :- |

 

```php
public function run()
{
    $view = $this->getView();
    GridViewAsset::register($view);
    $id = $this->options['id'];
    $options = Json::htmlEncode(array\_merge($this->getClientOptions(), ['filterOnFocusOut' => $this->filterOnFocusOut]));
    $view->registerJs("jQuery('#$id').yiiGridView($options);");
    parent::run();
}
```


```php
setId() public method
``` 

**Defined in:** [yii\base\Widget::setId()](/doc/api/2.0/yii-base-widget#setId\(\)-detail)

**Sets the ID of the widget.**

|public | void | [**setId**](/doc/api/2.0/yii-base-widget#setId\(\)-detail) ( $value )|
| :- | :- | :- |
|$value|[string](https://www.php.net/language.types.string)|Id of the widget.|

 

```php
public function setId($value)
{
    $this->\_id = $value;
}
```


```php
setView() public method
``` 

**Defined in:** [yii\base\Widget::setView()](/doc/api/2.0/yii-base-widget#setView\(\)-detail)

**Sets the view object to be used by this widget.**

|public | void | [**setView**](/doc/api/2.0/yii-base-widget#setView\(\)-detail) ( $view )|
| :- | :- | :- |
|$view|[yii\base\View](/doc/api/2.0/yii-base-view)|The view object that can be used to render views or view files.|

 

```php
public function setView($view)
{
    $this->\_view = $view;
}
```


```php
trigger() public method
``` 

**Defined in:** [yii\base\Component::trigger()](/doc/api/2.0/yii-base-component#trigger\(\)-detail)

**Triggers an event.**

This method represents the happening of an event. It invokes all attached handlers for the event including class-level handlers.

|public | void | [**trigger**](/doc/api/2.0/yii-base-component#trigger\(\)-detail) ( $name, [yii\base\Event](/doc/api/2.0/yii-base-event) $event = null )|
| :- | :- | :- |
|$name|[string](https://www.php.net/language.types.string)|The event name|
|$event|[yii\base\Event](/doc/api/2.0/yii-base-event)|[null](https://www.php.net/language.types.null)|The event instance. If not set, a default [yii\base\Event](/doc/api/2.0/yii-base-event) object will be created.|

 

```php
public function trigger($name, Event $event = null)
{
    $this->ensureBehaviors();
    $eventHandlers = [];
    foreach ($this->\_eventWildcards as $wildcard => $handlers) {
        if (StringHelper::matchWildcard($wildcard, $name)) {
            $eventHandlers[] = $handlers;
        }
    }
    if (!empty($this->\_events[$name])) {
        $eventHandlers[] = $this->\_events[$name];
    }
    if (!empty($eventHandlers)) {
        $eventHandlers = call\_user\_func\_array('array\_merge', $eventHandlers);
        if ($event === null) {
            $event = new Event();
        }
        if ($event->sender === null) {
            $event->sender = $this;
        }
        $event->handled = false;
        $event->name = $name;
        foreach ($eventHandlers as $handler) {
            $event->data = $handler[1];
            call\_user\_func($handler[0], $event);
            // stop further handling if the event is handled
            if ($event->handled) {
                return;
            }
        }
    }
    // invoke class-level attached handlers
    Event::trigger($this, $name, $event);
}
```


```php
widget() public static method
``` 

**Defined in:** [yii\base\Widget::widget()](/doc/api/2.0/yii-base-widget#widget\(\)-detail)

**Creates a widget instance and runs it.**

The widget rendering result is returned by this method.

|public static | [string](https://www.php.net/language.types.string) | [**widget**](/doc/api/2.0/yii-base-widget#widget\(\)-detail) ( $config = [] )|
| :- | :- | :- |
|$config|[array](https://www.php.net/language.types.array)|Name-value pairs that will be used to initialize the object properties|
|**return**|[string](https://www.php.net/language.types.string)|The rendering result of the widget.|
|**throws**|[Throwable](https://www.php.net/class.throwable)||
 

```php
public static function widget($config = [])
{
    ob\_start();
    ob\_implicit\_flush(false);
    try {
        /\* @var $widget Widget \*/
        $config['class'] = get\_called\_class();
        $widget = Yii::createObject($config);
        $out = '';
        if ($widget->beforeRun()) {
            $result = $widget->run();
            $out = $widget->afterRun($result);
        }
    } catch (\Exception $e) {
        // close the output buffer opened above if it has not been closed already
        if (ob\_get\_level() > 0) {
            ob\_end\_clean();
        }
        throw $e;
    } catch (\Throwable $e) {
        // close the output buffer opened above if it has not been closed already
        if (ob\_get\_level() > 0) {
            ob\_end\_clean();
        }
        throw $e;
    }
    return ob\_get\_clean() . $out;
}
```