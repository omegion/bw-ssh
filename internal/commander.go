package internal

import "k8s.io/utils/exec"

// Commander is the root of this helper.
type Commander struct {
	Executor exec.Interface
}

// NewCommander is a factory for Commander.
func NewCommander() Commander {
	return Commander{
		exec.New(),
	}
}
