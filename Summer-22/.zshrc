# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

source /usr/share/zsh-theme-powerlevel10k/powerlevel10k.zsh-theme

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# Uncomment the following line to enable command auto-correction.
ENABLE_CORRECTION="true"
# case insensitive path-completion
autoload -U compinit
compinit
zstyle ':completion:*' matcher-list 'm:{[:lower:]}={[:upper:]}'

# enable color support of ls and also add handy aliases
  if [ -x /usr/bin/dircolors ]; then
      test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
      alias ls='ls --color=auto'
      alias dir='dir --color=auto'
      alias vdir='vdir --color=auto'
      alias grep='grep --color=auto'
      alias fgrep='fgrep --color=auto'
      alias egrep='egrep --color=auto'
  fi


    ## ALIASES ##

# some more ls aliases
    alias ll='ls -alF'
    alias la='ls -A'
    alias l='ls -CF'
    alias ls='ls -lah --color=auto'

# Paru aliases
    alias paruin='paru -S'
    alias paruout='paru -Rs'

# Directory aliases
    alias .1='cd ..'
    alias .2='cd ../..'
    alias .3='cd ../../..'
    alias .4='cd ../../../..'
    alias .5='cd ../../../../..'
    
# mkdir verbose + make parents
    alias mkdir='mkdir -pv' 

# Confirmations (safety checks)
    alias mv='mv -i'
    alias cp='cp -i'
    alias rm='rm -i'
    alias ln='ln -i'

export EDITOR=nvim

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

export FZF_DEFAULT_COMMAND="find -L"
export FZF_DEFAULT_OPS="-m --height 50% --layout=reverse --border --inline-info --extended"

