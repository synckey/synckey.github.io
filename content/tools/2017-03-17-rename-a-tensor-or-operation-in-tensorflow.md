Title:Rename a Tensor or Operation in Tensorflow
Date: 2017.03.17
Tags: machine learning, deep learning, tools.
Slug: rename-a-tensor-or-operation-in-tensorflow
Author: Andy
Place: Beijing

Sometimes we want to rename a Tensor(or an Operation) in Tensorflow, there is no way to do that directly, because a tf.Operation (or tf.Tensor) is immutable once it has been created. The typical way to rename an op is therefore to use tf.identity(), which has almost no runtime cost:
   
    :::python
    with tf.name_scope("abc"):
        z = x + y
        z = tf.identity(z, name="z")

The tf.identity function returns a Tensor with the same shape and contents as the input Tensor or value.

The recommended way to structure your name scope is to assign the name of the scope itself to the "output" from the scope (if there is a single output op):
    
    :::
    with tf.name_scope("abc") as scope:
        # z will get the name "abc". x and y will have names in "abc/..." if they
        # are converted to tensors.
        z = tf.add(x, y, name=scope)

This is how the TensorFlow libraries are structured, and it tends to give the best visualization in TensorBoard.

#### References
[How to rename a variable which respects the name scope?](https://stackoverflow.com/questions/34399588/how-to-rename-a-variable-which-respects-the-name-scope/34399966#34399966)
