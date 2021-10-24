# Tinymce Comments Extension

This package is made to find a solution to comment property of html editors.

Dependencies:

* Jquery (v3.6.0)
* Tinymce (v5.10.0)

installation :

Use the package manager [npm](https://www.npmjs.com) to install tinymce-comments.

``` npm i tinymce-comments ```

Usage:

In this release, there is only one function that you have to call, while you are using tinymce-comments package.

``` tinymce.initComment(); ```

# HTML Usage:

Tinymce uses some of the attributes to write data in the text of editor, such as "lang". This package uses lang attribute to fill comments in the editor. 

Comment html is looking like that:

``` <span id="editable-0" class="editable" lang="Lorem Ipsum">sum is simply dummy text of the printing and typesetting industry. Lore</span> ```
